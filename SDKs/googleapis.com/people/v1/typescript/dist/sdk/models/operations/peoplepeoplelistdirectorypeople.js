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
export var PeoplePeopleListDirectoryPeopleMergeSourcesEnum;
(function (PeoplePeopleListDirectoryPeopleMergeSourcesEnum) {
    PeoplePeopleListDirectoryPeopleMergeSourcesEnum["DirectoryMergeSourceTypeUnspecified"] = "DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED";
    PeoplePeopleListDirectoryPeopleMergeSourcesEnum["DirectoryMergeSourceTypeContact"] = "DIRECTORY_MERGE_SOURCE_TYPE_CONTACT";
})(PeoplePeopleListDirectoryPeopleMergeSourcesEnum || (PeoplePeopleListDirectoryPeopleMergeSourcesEnum = {}));
export var PeoplePeopleListDirectoryPeopleSourcesEnum;
(function (PeoplePeopleListDirectoryPeopleSourcesEnum) {
    PeoplePeopleListDirectoryPeopleSourcesEnum["DirectorySourceTypeUnspecified"] = "DIRECTORY_SOURCE_TYPE_UNSPECIFIED";
    PeoplePeopleListDirectoryPeopleSourcesEnum["DirectorySourceTypeDomainContact"] = "DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT";
    PeoplePeopleListDirectoryPeopleSourcesEnum["DirectorySourceTypeDomainProfile"] = "DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE";
})(PeoplePeopleListDirectoryPeopleSourcesEnum || (PeoplePeopleListDirectoryPeopleSourcesEnum = {}));
var PeoplePeopleListDirectoryPeopleQueryParams = /** @class */ (function (_super) {
    __extends(PeoplePeopleListDirectoryPeopleQueryParams, _super);
    function PeoplePeopleListDirectoryPeopleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mergeSources" }),
        __metadata("design:type", Array)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "mergeSources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" }),
        __metadata("design:type", String)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "readMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestSyncToken" }),
        __metadata("design:type", Boolean)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "requestSyncToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sources" }),
        __metadata("design:type", Array)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=syncToken" }),
        __metadata("design:type", String)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "syncToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PeoplePeopleListDirectoryPeopleQueryParams.prototype, "uploadProtocol", void 0);
    return PeoplePeopleListDirectoryPeopleQueryParams;
}(SpeakeasyBase));
export { PeoplePeopleListDirectoryPeopleQueryParams };
var PeoplePeopleListDirectoryPeopleSecurity = /** @class */ (function (_super) {
    __extends(PeoplePeopleListDirectoryPeopleSecurity, _super);
    function PeoplePeopleListDirectoryPeopleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleListDirectoryPeopleSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleListDirectoryPeopleSecurity.prototype, "oauth2c", void 0);
    return PeoplePeopleListDirectoryPeopleSecurity;
}(SpeakeasyBase));
export { PeoplePeopleListDirectoryPeopleSecurity };
var PeoplePeopleListDirectoryPeopleRequest = /** @class */ (function (_super) {
    __extends(PeoplePeopleListDirectoryPeopleRequest, _super);
    function PeoplePeopleListDirectoryPeopleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleListDirectoryPeopleQueryParams)
    ], PeoplePeopleListDirectoryPeopleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleListDirectoryPeopleSecurity)
    ], PeoplePeopleListDirectoryPeopleRequest.prototype, "security", void 0);
    return PeoplePeopleListDirectoryPeopleRequest;
}(SpeakeasyBase));
export { PeoplePeopleListDirectoryPeopleRequest };
var PeoplePeopleListDirectoryPeopleResponse = /** @class */ (function (_super) {
    __extends(PeoplePeopleListDirectoryPeopleResponse, _super);
    function PeoplePeopleListDirectoryPeopleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PeoplePeopleListDirectoryPeopleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDirectoryPeopleResponse)
    ], PeoplePeopleListDirectoryPeopleResponse.prototype, "listDirectoryPeopleResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PeoplePeopleListDirectoryPeopleResponse.prototype, "statusCode", void 0);
    return PeoplePeopleListDirectoryPeopleResponse;
}(SpeakeasyBase));
export { PeoplePeopleListDirectoryPeopleResponse };
