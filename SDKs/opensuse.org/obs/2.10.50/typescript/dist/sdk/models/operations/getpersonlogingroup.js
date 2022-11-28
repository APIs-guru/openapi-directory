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
import * as shared from "../shared";
var GetPersonLoginGroupPathParams = /** @class */ (function (_super) {
    __extends(GetPersonLoginGroupPathParams, _super);
    function GetPersonLoginGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=login" }),
        __metadata("design:type", String)
    ], GetPersonLoginGroupPathParams.prototype, "login", void 0);
    return GetPersonLoginGroupPathParams;
}(SpeakeasyBase));
export { GetPersonLoginGroupPathParams };
var GetPersonLoginGroupSecurity = /** @class */ (function (_super) {
    __extends(GetPersonLoginGroupSecurity, _super);
    function GetPersonLoginGroupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetPersonLoginGroupSecurity.prototype, "basicAuthentication", void 0);
    return GetPersonLoginGroupSecurity;
}(SpeakeasyBase));
export { GetPersonLoginGroupSecurity };
var GetPersonLoginGroupRequest = /** @class */ (function (_super) {
    __extends(GetPersonLoginGroupRequest, _super);
    function GetPersonLoginGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonLoginGroupPathParams)
    ], GetPersonLoginGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonLoginGroupSecurity)
    ], GetPersonLoginGroupRequest.prototype, "security", void 0);
    return GetPersonLoginGroupRequest;
}(SpeakeasyBase));
export { GetPersonLoginGroupRequest };
var GetPersonLoginGroupResponse = /** @class */ (function (_super) {
    __extends(GetPersonLoginGroupResponse, _super);
    function GetPersonLoginGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPersonLoginGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPersonLoginGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPersonLoginGroupResponse.prototype, "statusCode", void 0);
    return GetPersonLoginGroupResponse;
}(SpeakeasyBase));
export { GetPersonLoginGroupResponse };
