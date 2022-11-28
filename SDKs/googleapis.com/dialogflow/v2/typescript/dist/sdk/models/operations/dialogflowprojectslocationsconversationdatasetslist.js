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
var DialogflowProjectsLocationsConversationDatasetsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsListPathParams, _super);
    function DialogflowProjectsLocationsConversationDatasetsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsConversationDatasetsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsListPathParams };
var DialogflowProjectsLocationsConversationDatasetsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsListQueryParams, _super);
    function DialogflowProjectsLocationsConversationDatasetsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationDatasetsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationDatasetsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationDatasetsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsListQueryParams };
var DialogflowProjectsLocationsConversationDatasetsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsListSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationDatasetsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationDatasetsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationDatasetsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationDatasetsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsListSecurityOption1 };
var DialogflowProjectsLocationsConversationDatasetsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsListSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationDatasetsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationDatasetsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationDatasetsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationDatasetsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsListSecurityOption2 };
var DialogflowProjectsLocationsConversationDatasetsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsListSecurity, _super);
    function DialogflowProjectsLocationsConversationDatasetsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationDatasetsListSecurityOption1)
    ], DialogflowProjectsLocationsConversationDatasetsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationDatasetsListSecurityOption2)
    ], DialogflowProjectsLocationsConversationDatasetsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationDatasetsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsListSecurity };
var DialogflowProjectsLocationsConversationDatasetsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsListRequest, _super);
    function DialogflowProjectsLocationsConversationDatasetsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationDatasetsListPathParams)
    ], DialogflowProjectsLocationsConversationDatasetsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationDatasetsListQueryParams)
    ], DialogflowProjectsLocationsConversationDatasetsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationDatasetsListSecurity)
    ], DialogflowProjectsLocationsConversationDatasetsListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationDatasetsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsListRequest };
var DialogflowProjectsLocationsConversationDatasetsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsListResponse, _super);
    function DialogflowProjectsLocationsConversationDatasetsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2ListConversationDatasetsResponse)
    ], DialogflowProjectsLocationsConversationDatasetsListResponse.prototype, "googleCloudDialogflowV2ListConversationDatasetsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationDatasetsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationDatasetsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsListResponse };
