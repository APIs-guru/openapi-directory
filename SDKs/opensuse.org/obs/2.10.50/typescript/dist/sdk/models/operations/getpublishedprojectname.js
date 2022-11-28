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
var GetPublishedProjectNamePathParams = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNamePathParams, _super);
    function GetPublishedProjectNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNamePathParams.prototype, "projectName", void 0);
    return GetPublishedProjectNamePathParams;
}(SpeakeasyBase));
export { GetPublishedProjectNamePathParams };
var GetPublishedProjectNameSecurity = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameSecurity, _super);
    function GetPublishedProjectNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetPublishedProjectNameSecurity.prototype, "basicAuthentication", void 0);
    return GetPublishedProjectNameSecurity;
}(SpeakeasyBase));
export { GetPublishedProjectNameSecurity };
var GetPublishedProjectNameRequest = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRequest, _super);
    function GetPublishedProjectNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublishedProjectNamePathParams)
    ], GetPublishedProjectNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublishedProjectNameSecurity)
    ], GetPublishedProjectNameRequest.prototype, "security", void 0);
    return GetPublishedProjectNameRequest;
}(SpeakeasyBase));
export { GetPublishedProjectNameRequest };
var GetPublishedProjectNameResponse = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameResponse, _super);
    function GetPublishedProjectNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPublishedProjectNameResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPublishedProjectNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPublishedProjectNameResponse.prototype, "statusCode", void 0);
    return GetPublishedProjectNameResponse;
}(SpeakeasyBase));
export { GetPublishedProjectNameResponse };
