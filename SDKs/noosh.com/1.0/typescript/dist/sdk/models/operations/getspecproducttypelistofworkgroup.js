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
var GetSpecProductTypeListOfWorkgroupPathParams = /** @class */ (function (_super) {
    __extends(GetSpecProductTypeListOfWorkgroupPathParams, _super);
    function GetSpecProductTypeListOfWorkgroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" }),
        __metadata("design:type", String)
    ], GetSpecProductTypeListOfWorkgroupPathParams.prototype, "workgroupId", void 0);
    return GetSpecProductTypeListOfWorkgroupPathParams;
}(SpeakeasyBase));
export { GetSpecProductTypeListOfWorkgroupPathParams };
var GetSpecProductTypeListOfWorkgroupRequest = /** @class */ (function (_super) {
    __extends(GetSpecProductTypeListOfWorkgroupRequest, _super);
    function GetSpecProductTypeListOfWorkgroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSpecProductTypeListOfWorkgroupPathParams)
    ], GetSpecProductTypeListOfWorkgroupRequest.prototype, "pathParams", void 0);
    return GetSpecProductTypeListOfWorkgroupRequest;
}(SpeakeasyBase));
export { GetSpecProductTypeListOfWorkgroupRequest };
var GetSpecProductTypeListOfWorkgroupResponse = /** @class */ (function (_super) {
    __extends(GetSpecProductTypeListOfWorkgroupResponse, _super);
    function GetSpecProductTypeListOfWorkgroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSpecProductTypeListOfWorkgroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSpecProductTypeListOfWorkgroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSpecProductTypeListOfWorkgroupResponse.prototype, "httpStatusVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSpecProductTypeListOfWorkgroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSpecProductTypeListOfWorkgroupResponse.prototype, "workgroupAttributeListVo", void 0);
    return GetSpecProductTypeListOfWorkgroupResponse;
}(SpeakeasyBase));
export { GetSpecProductTypeListOfWorkgroupResponse };
