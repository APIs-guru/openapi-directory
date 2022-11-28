var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var GetContactUserInfoPathParams = /** @class */ (function (_super) {
    __extends(GetContactUserInfoPathParams, _super);
    function GetContactUserInfoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", String)
    ], GetContactUserInfoPathParams.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" }),
        __metadata("design:type", String)
    ], GetContactUserInfoPathParams.prototype, "workgroupId", void 0);
    return GetContactUserInfoPathParams;
}(SpeakeasyBase));
export { GetContactUserInfoPathParams };
var GetContactUserInfoRequest = /** @class */ (function (_super) {
    __extends(GetContactUserInfoRequest, _super);
    function GetContactUserInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetContactUserInfoPathParams)
    ], GetContactUserInfoRequest.prototype, "pathParams", void 0);
    return GetContactUserInfoRequest;
}(SpeakeasyBase));
export { GetContactUserInfoRequest };
var GetContactUserInfoResponse = /** @class */ (function (_super) {
    __extends(GetContactUserInfoResponse, _super);
    function GetContactUserInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetContactUserInfoResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetContactUserInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetContactUserInfoResponse.prototype, "httpStatusVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetContactUserInfoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetContactUserInfoResponse.prototype, "userDetailsExpandVo", void 0);
    return GetContactUserInfoResponse;
}(SpeakeasyBase));
export { GetContactUserInfoResponse };
