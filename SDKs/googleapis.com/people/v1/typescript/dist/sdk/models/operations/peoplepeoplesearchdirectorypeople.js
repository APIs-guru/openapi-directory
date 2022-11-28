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
export var PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum;
(function (PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum) {
    PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum["DirectoryMergeSourceTypeUnspecified"] = "DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED";
    PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum["DirectoryMergeSourceTypeContact"] = "DIRECTORY_MERGE_SOURCE_TYPE_CONTACT";
})(PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum || (PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum = {}));
export var PeoplePeopleSearchDirectoryPeopleSourcesEnum;
(function (PeoplePeopleSearchDirectoryPeopleSourcesEnum) {
    PeoplePeopleSearchDirectoryPeopleSourcesEnum["DirectorySourceTypeUnspecified"] = "DIRECTORY_SOURCE_TYPE_UNSPECIFIED";
    PeoplePeopleSearchDirectoryPeopleSourcesEnum["DirectorySourceTypeDomainContact"] = "DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT";
    PeoplePeopleSearchDirectoryPeopleSourcesEnum["DirectorySourceTypeDomainProfile"] = "DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE";
})(PeoplePeopleSearchDirectoryPeopleSourcesEnum || (PeoplePeopleSearchDirectoryPeopleSourcesEnum = {}));
var PeoplePeopleSearchDirectoryPeopleQueryParams = /** @class */ (function (_super) {
    __extends(PeoplePeopleSearchDirectoryPeopleQueryParams, _super);
    function PeoplePeopleSearchDirectoryPeopleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mergeSources" }),
        __metadata("design:type", Array)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "mergeSources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "readMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sources" }),
        __metadata("design:type", Array)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchDirectoryPeopleQueryParams.prototype, "uploadProtocol", void 0);
    return PeoplePeopleSearchDirectoryPeopleQueryParams;
}(SpeakeasyBase));
export { PeoplePeopleSearchDirectoryPeopleQueryParams };
var PeoplePeopleSearchDirectoryPeopleSecurity = /** @class */ (function (_super) {
    __extends(PeoplePeopleSearchDirectoryPeopleSecurity, _super);
    function PeoplePeopleSearchDirectoryPeopleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleSearchDirectoryPeopleSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleSearchDirectoryPeopleSecurity.prototype, "oauth2c", void 0);
    return PeoplePeopleSearchDirectoryPeopleSecurity;
}(SpeakeasyBase));
export { PeoplePeopleSearchDirectoryPeopleSecurity };
var PeoplePeopleSearchDirectoryPeopleRequest = /** @class */ (function (_super) {
    __extends(PeoplePeopleSearchDirectoryPeopleRequest, _super);
    function PeoplePeopleSearchDirectoryPeopleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleSearchDirectoryPeopleQueryParams)
    ], PeoplePeopleSearchDirectoryPeopleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleSearchDirectoryPeopleSecurity)
    ], PeoplePeopleSearchDirectoryPeopleRequest.prototype, "security", void 0);
    return PeoplePeopleSearchDirectoryPeopleRequest;
}(SpeakeasyBase));
export { PeoplePeopleSearchDirectoryPeopleRequest };
var PeoplePeopleSearchDirectoryPeopleResponse = /** @class */ (function (_super) {
    __extends(PeoplePeopleSearchDirectoryPeopleResponse, _super);
    function PeoplePeopleSearchDirectoryPeopleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PeoplePeopleSearchDirectoryPeopleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchDirectoryPeopleResponse)
    ], PeoplePeopleSearchDirectoryPeopleResponse.prototype, "searchDirectoryPeopleResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PeoplePeopleSearchDirectoryPeopleResponse.prototype, "statusCode", void 0);
    return PeoplePeopleSearchDirectoryPeopleResponse;
}(SpeakeasyBase));
export { PeoplePeopleSearchDirectoryPeopleResponse };
