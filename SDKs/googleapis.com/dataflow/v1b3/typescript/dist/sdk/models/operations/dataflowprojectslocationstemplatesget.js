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
var DataflowProjectsLocationsTemplatesGetPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesGetPathParams, _super);
    function DataflowProjectsLocationsTemplatesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesGetPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesGetPathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsTemplatesGetPathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesGetPathParams };
export var DataflowProjectsLocationsTemplatesGetViewEnum;
(function (DataflowProjectsLocationsTemplatesGetViewEnum) {
    DataflowProjectsLocationsTemplatesGetViewEnum["MetadataOnly"] = "METADATA_ONLY";
})(DataflowProjectsLocationsTemplatesGetViewEnum || (DataflowProjectsLocationsTemplatesGetViewEnum = {}));
var DataflowProjectsLocationsTemplatesGetQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesGetQueryParams, _super);
    function DataflowProjectsLocationsTemplatesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gcsPath" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesGetQueryParams.prototype, "gcsPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsTemplatesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesGetQueryParams.prototype, "view", void 0);
    return DataflowProjectsLocationsTemplatesGetQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesGetQueryParams };
var DataflowProjectsLocationsTemplatesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesGetSecurityOption1, _super);
    function DataflowProjectsLocationsTemplatesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsTemplatesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsTemplatesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsTemplatesGetSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesGetSecurityOption1 };
var DataflowProjectsLocationsTemplatesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesGetSecurityOption2, _super);
    function DataflowProjectsLocationsTemplatesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsTemplatesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsTemplatesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsTemplatesGetSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesGetSecurityOption2 };
var DataflowProjectsLocationsTemplatesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesGetSecurityOption3, _super);
    function DataflowProjectsLocationsTemplatesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsTemplatesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsTemplatesGetSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsTemplatesGetSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesGetSecurityOption3 };
var DataflowProjectsLocationsTemplatesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesGetSecurityOption4, _super);
    function DataflowProjectsLocationsTemplatesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsTemplatesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsTemplatesGetSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsTemplatesGetSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesGetSecurityOption4 };
var DataflowProjectsLocationsTemplatesGetSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesGetSecurity, _super);
    function DataflowProjectsLocationsTemplatesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsTemplatesGetSecurityOption1)
    ], DataflowProjectsLocationsTemplatesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsTemplatesGetSecurityOption2)
    ], DataflowProjectsLocationsTemplatesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsTemplatesGetSecurityOption3)
    ], DataflowProjectsLocationsTemplatesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsTemplatesGetSecurityOption4)
    ], DataflowProjectsLocationsTemplatesGetSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsTemplatesGetSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesGetSecurity };
var DataflowProjectsLocationsTemplatesGetRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesGetRequest, _super);
    function DataflowProjectsLocationsTemplatesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsTemplatesGetPathParams)
    ], DataflowProjectsLocationsTemplatesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsTemplatesGetQueryParams)
    ], DataflowProjectsLocationsTemplatesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsTemplatesGetSecurity)
    ], DataflowProjectsLocationsTemplatesGetRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsTemplatesGetRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesGetRequest };
var DataflowProjectsLocationsTemplatesGetResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsTemplatesGetResponse, _super);
    function DataflowProjectsLocationsTemplatesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsTemplatesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetTemplateResponse)
    ], DataflowProjectsLocationsTemplatesGetResponse.prototype, "getTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsTemplatesGetResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsTemplatesGetResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsTemplatesGetResponse };
