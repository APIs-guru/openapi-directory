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
var DialogflowProjectsLocationsAnswerRecordsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAnswerRecordsListPathParams, _super);
    function DialogflowProjectsLocationsAnswerRecordsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAnswerRecordsListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAnswerRecordsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAnswerRecordsListPathParams };
var DialogflowProjectsLocationsAnswerRecordsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAnswerRecordsListQueryParams, _super);
    function DialogflowProjectsLocationsAnswerRecordsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAnswerRecordsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAnswerRecordsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAnswerRecordsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAnswerRecordsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAnswerRecordsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAnswerRecordsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAnswerRecordsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAnswerRecordsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAnswerRecordsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAnswerRecordsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAnswerRecordsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAnswerRecordsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAnswerRecordsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAnswerRecordsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAnswerRecordsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAnswerRecordsListQueryParams };
var DialogflowProjectsLocationsAnswerRecordsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAnswerRecordsListSecurityOption1, _super);
    function DialogflowProjectsLocationsAnswerRecordsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAnswerRecordsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAnswerRecordsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAnswerRecordsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAnswerRecordsListSecurityOption1 };
var DialogflowProjectsLocationsAnswerRecordsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAnswerRecordsListSecurityOption2, _super);
    function DialogflowProjectsLocationsAnswerRecordsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAnswerRecordsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAnswerRecordsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAnswerRecordsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAnswerRecordsListSecurityOption2 };
var DialogflowProjectsLocationsAnswerRecordsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAnswerRecordsListSecurity, _super);
    function DialogflowProjectsLocationsAnswerRecordsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAnswerRecordsListSecurityOption1)
    ], DialogflowProjectsLocationsAnswerRecordsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAnswerRecordsListSecurityOption2)
    ], DialogflowProjectsLocationsAnswerRecordsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAnswerRecordsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAnswerRecordsListSecurity };
var DialogflowProjectsLocationsAnswerRecordsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAnswerRecordsListRequest, _super);
    function DialogflowProjectsLocationsAnswerRecordsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAnswerRecordsListPathParams)
    ], DialogflowProjectsLocationsAnswerRecordsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAnswerRecordsListQueryParams)
    ], DialogflowProjectsLocationsAnswerRecordsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAnswerRecordsListSecurity)
    ], DialogflowProjectsLocationsAnswerRecordsListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAnswerRecordsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAnswerRecordsListRequest };
var DialogflowProjectsLocationsAnswerRecordsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAnswerRecordsListResponse, _super);
    function DialogflowProjectsLocationsAnswerRecordsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAnswerRecordsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2ListAnswerRecordsResponse)
    ], DialogflowProjectsLocationsAnswerRecordsListResponse.prototype, "googleCloudDialogflowV2ListAnswerRecordsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAnswerRecordsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAnswerRecordsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAnswerRecordsListResponse };
