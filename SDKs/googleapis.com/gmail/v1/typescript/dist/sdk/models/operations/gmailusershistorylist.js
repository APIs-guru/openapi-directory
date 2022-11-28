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
var GmailUsersHistoryListPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersHistoryListPathParams, _super);
    function GmailUsersHistoryListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersHistoryListPathParams.prototype, "userId", void 0);
    return GmailUsersHistoryListPathParams;
}(SpeakeasyBase));
export { GmailUsersHistoryListPathParams };
export var GmailUsersHistoryListHistoryTypesEnum;
(function (GmailUsersHistoryListHistoryTypesEnum) {
    GmailUsersHistoryListHistoryTypesEnum["MessageAdded"] = "messageAdded";
    GmailUsersHistoryListHistoryTypesEnum["MessageDeleted"] = "messageDeleted";
    GmailUsersHistoryListHistoryTypesEnum["LabelAdded"] = "labelAdded";
    GmailUsersHistoryListHistoryTypesEnum["LabelRemoved"] = "labelRemoved";
})(GmailUsersHistoryListHistoryTypesEnum || (GmailUsersHistoryListHistoryTypesEnum = {}));
var GmailUsersHistoryListQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersHistoryListQueryParams, _super);
    function GmailUsersHistoryListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersHistoryListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersHistoryListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersHistoryListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersHistoryListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersHistoryListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=historyTypes" }),
        __metadata("design:type", Array)
    ], GmailUsersHistoryListQueryParams.prototype, "historyTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersHistoryListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labelId" }),
        __metadata("design:type", String)
    ], GmailUsersHistoryListQueryParams.prototype, "labelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GmailUsersHistoryListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersHistoryListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GmailUsersHistoryListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersHistoryListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersHistoryListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startHistoryId" }),
        __metadata("design:type", String)
    ], GmailUsersHistoryListQueryParams.prototype, "startHistoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersHistoryListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersHistoryListQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersHistoryListQueryParams;
}(SpeakeasyBase));
export { GmailUsersHistoryListQueryParams };
var GmailUsersHistoryListSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersHistoryListSecurityOption1, _super);
    function GmailUsersHistoryListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersHistoryListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersHistoryListSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersHistoryListSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersHistoryListSecurityOption1 };
var GmailUsersHistoryListSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersHistoryListSecurityOption2, _super);
    function GmailUsersHistoryListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersHistoryListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersHistoryListSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersHistoryListSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersHistoryListSecurityOption2 };
var GmailUsersHistoryListSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersHistoryListSecurityOption3, _super);
    function GmailUsersHistoryListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersHistoryListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersHistoryListSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersHistoryListSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersHistoryListSecurityOption3 };
var GmailUsersHistoryListSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersHistoryListSecurityOption4, _super);
    function GmailUsersHistoryListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersHistoryListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersHistoryListSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersHistoryListSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersHistoryListSecurityOption4 };
var GmailUsersHistoryListSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersHistoryListSecurity, _super);
    function GmailUsersHistoryListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersHistoryListSecurityOption1)
    ], GmailUsersHistoryListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersHistoryListSecurityOption2)
    ], GmailUsersHistoryListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersHistoryListSecurityOption3)
    ], GmailUsersHistoryListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersHistoryListSecurityOption4)
    ], GmailUsersHistoryListSecurity.prototype, "option4", void 0);
    return GmailUsersHistoryListSecurity;
}(SpeakeasyBase));
export { GmailUsersHistoryListSecurity };
var GmailUsersHistoryListRequest = /** @class */ (function (_super) {
    __extends(GmailUsersHistoryListRequest, _super);
    function GmailUsersHistoryListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersHistoryListPathParams)
    ], GmailUsersHistoryListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersHistoryListQueryParams)
    ], GmailUsersHistoryListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersHistoryListSecurity)
    ], GmailUsersHistoryListRequest.prototype, "security", void 0);
    return GmailUsersHistoryListRequest;
}(SpeakeasyBase));
export { GmailUsersHistoryListRequest };
var GmailUsersHistoryListResponse = /** @class */ (function (_super) {
    __extends(GmailUsersHistoryListResponse, _super);
    function GmailUsersHistoryListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersHistoryListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListHistoryResponse)
    ], GmailUsersHistoryListResponse.prototype, "listHistoryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersHistoryListResponse.prototype, "statusCode", void 0);
    return GmailUsersHistoryListResponse;
}(SpeakeasyBase));
export { GmailUsersHistoryListResponse };
