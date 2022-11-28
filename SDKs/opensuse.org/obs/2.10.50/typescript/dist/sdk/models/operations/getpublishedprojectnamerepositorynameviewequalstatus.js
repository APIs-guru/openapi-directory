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
var GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams, _super);
    function GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_name" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams.prototype, "repositoryName", void 0);
    return GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams };
export var GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum;
(function (GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum) {
    GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum["Status"] = "status";
})(GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum || (GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum = {}));
var GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams, _super);
    function GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams.prototype, "view", void 0);
    return GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams };
var GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity, _super);
    function GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity.prototype, "basicAuthentication", void 0);
    return GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity };
var GetPublishedProjectNameRepositoryNameViewEqualStatusRequest = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameViewEqualStatusRequest, _super);
    function GetPublishedProjectNameRepositoryNameViewEqualStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams)
    ], GetPublishedProjectNameRepositoryNameViewEqualStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams)
    ], GetPublishedProjectNameRepositoryNameViewEqualStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity)
    ], GetPublishedProjectNameRepositoryNameViewEqualStatusRequest.prototype, "security", void 0);
    return GetPublishedProjectNameRepositoryNameViewEqualStatusRequest;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameViewEqualStatusRequest };
var GetPublishedProjectNameRepositoryNameViewEqualStatusResponse = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameViewEqualStatusResponse, _super);
    function GetPublishedProjectNameRepositoryNameViewEqualStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPublishedProjectNameRepositoryNameViewEqualStatusResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameViewEqualStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPublishedProjectNameRepositoryNameViewEqualStatusResponse.prototype, "statusCode", void 0);
    return GetPublishedProjectNameRepositoryNameViewEqualStatusResponse;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameViewEqualStatusResponse };
