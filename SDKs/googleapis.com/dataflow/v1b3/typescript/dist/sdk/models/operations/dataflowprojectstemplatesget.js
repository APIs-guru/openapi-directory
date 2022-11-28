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
var DataflowProjectsTemplatesGetPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesGetPathParams, _super);
    function DataflowProjectsTemplatesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesGetPathParams.prototype, "projectId", void 0);
    return DataflowProjectsTemplatesGetPathParams;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesGetPathParams };
export var DataflowProjectsTemplatesGetViewEnum;
(function (DataflowProjectsTemplatesGetViewEnum) {
    DataflowProjectsTemplatesGetViewEnum["MetadataOnly"] = "METADATA_ONLY";
})(DataflowProjectsTemplatesGetViewEnum || (DataflowProjectsTemplatesGetViewEnum = {}));
var DataflowProjectsTemplatesGetQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesGetQueryParams, _super);
    function DataflowProjectsTemplatesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gcsPath" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesGetQueryParams.prototype, "gcsPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesGetQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsTemplatesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesGetQueryParams.prototype, "view", void 0);
    return DataflowProjectsTemplatesGetQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesGetQueryParams };
var DataflowProjectsTemplatesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesGetSecurityOption1, _super);
    function DataflowProjectsTemplatesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsTemplatesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsTemplatesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsTemplatesGetSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesGetSecurityOption1 };
var DataflowProjectsTemplatesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesGetSecurityOption2, _super);
    function DataflowProjectsTemplatesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsTemplatesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsTemplatesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsTemplatesGetSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesGetSecurityOption2 };
var DataflowProjectsTemplatesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesGetSecurityOption3, _super);
    function DataflowProjectsTemplatesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsTemplatesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsTemplatesGetSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsTemplatesGetSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesGetSecurityOption3 };
var DataflowProjectsTemplatesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesGetSecurityOption4, _super);
    function DataflowProjectsTemplatesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsTemplatesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsTemplatesGetSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsTemplatesGetSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesGetSecurityOption4 };
var DataflowProjectsTemplatesGetSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesGetSecurity, _super);
    function DataflowProjectsTemplatesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsTemplatesGetSecurityOption1)
    ], DataflowProjectsTemplatesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsTemplatesGetSecurityOption2)
    ], DataflowProjectsTemplatesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsTemplatesGetSecurityOption3)
    ], DataflowProjectsTemplatesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsTemplatesGetSecurityOption4)
    ], DataflowProjectsTemplatesGetSecurity.prototype, "option4", void 0);
    return DataflowProjectsTemplatesGetSecurity;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesGetSecurity };
var DataflowProjectsTemplatesGetRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesGetRequest, _super);
    function DataflowProjectsTemplatesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsTemplatesGetPathParams)
    ], DataflowProjectsTemplatesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsTemplatesGetQueryParams)
    ], DataflowProjectsTemplatesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsTemplatesGetSecurity)
    ], DataflowProjectsTemplatesGetRequest.prototype, "security", void 0);
    return DataflowProjectsTemplatesGetRequest;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesGetRequest };
var DataflowProjectsTemplatesGetResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsTemplatesGetResponse, _super);
    function DataflowProjectsTemplatesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsTemplatesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetTemplateResponse)
    ], DataflowProjectsTemplatesGetResponse.prototype, "getTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsTemplatesGetResponse.prototype, "statusCode", void 0);
    return DataflowProjectsTemplatesGetResponse;
}(SpeakeasyBase));
export { DataflowProjectsTemplatesGetResponse };
