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
var DialogflowProjectsLocationsConversationDatasetsImportConversationDataPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsImportConversationDataPathParams, _super);
    function DialogflowProjectsLocationsConversationDatasetsImportConversationDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataPathParams.prototype, "name", void 0);
    return DialogflowProjectsLocationsConversationDatasetsImportConversationDataPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsImportConversationDataPathParams };
var DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams, _super);
    function DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams };
var DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1 };
var DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption2 };
var DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity, _super);
    function DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption2)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity };
var DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest, _super);
    function DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationDatasetsImportConversationDataPathParams)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2ImportConversationDataRequest)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest };
var DialogflowProjectsLocationsConversationDatasetsImportConversationDataResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsImportConversationDataResponse, _super);
    function DialogflowProjectsLocationsConversationDatasetsImportConversationDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationDatasetsImportConversationDataResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationDatasetsImportConversationDataResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsImportConversationDataResponse };
