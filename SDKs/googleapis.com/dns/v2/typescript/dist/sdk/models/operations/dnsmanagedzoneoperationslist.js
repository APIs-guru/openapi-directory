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
var DnsManagedZoneOperationsListPathParams = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsListPathParams, _super);
    function DnsManagedZoneOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsListPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedZone" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsListPathParams.prototype, "managedZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsListPathParams.prototype, "project", void 0);
    return DnsManagedZoneOperationsListPathParams;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsListPathParams };
export var DnsManagedZoneOperationsListSortByEnum;
(function (DnsManagedZoneOperationsListSortByEnum) {
    DnsManagedZoneOperationsListSortByEnum["StartTime"] = "START_TIME";
    DnsManagedZoneOperationsListSortByEnum["Id"] = "ID";
})(DnsManagedZoneOperationsListSortByEnum || (DnsManagedZoneOperationsListSortByEnum = {}));
var DnsManagedZoneOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsListQueryParams, _super);
    function DnsManagedZoneOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DnsManagedZoneOperationsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsManagedZoneOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsListQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return DnsManagedZoneOperationsListQueryParams;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsListQueryParams };
var DnsManagedZoneOperationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsListSecurityOption1, _super);
    function DnsManagedZoneOperationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZoneOperationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZoneOperationsListSecurityOption1.prototype, "oauth2c", void 0);
    return DnsManagedZoneOperationsListSecurityOption1;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsListSecurityOption1 };
var DnsManagedZoneOperationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsListSecurityOption2, _super);
    function DnsManagedZoneOperationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZoneOperationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZoneOperationsListSecurityOption2.prototype, "oauth2c", void 0);
    return DnsManagedZoneOperationsListSecurityOption2;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsListSecurityOption2 };
var DnsManagedZoneOperationsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsListSecurityOption3, _super);
    function DnsManagedZoneOperationsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZoneOperationsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZoneOperationsListSecurityOption3.prototype, "oauth2c", void 0);
    return DnsManagedZoneOperationsListSecurityOption3;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsListSecurityOption3 };
var DnsManagedZoneOperationsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsListSecurityOption4, _super);
    function DnsManagedZoneOperationsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZoneOperationsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZoneOperationsListSecurityOption4.prototype, "oauth2c", void 0);
    return DnsManagedZoneOperationsListSecurityOption4;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsListSecurityOption4 };
var DnsManagedZoneOperationsListSecurity = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsListSecurity, _super);
    function DnsManagedZoneOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZoneOperationsListSecurityOption1)
    ], DnsManagedZoneOperationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZoneOperationsListSecurityOption2)
    ], DnsManagedZoneOperationsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZoneOperationsListSecurityOption3)
    ], DnsManagedZoneOperationsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZoneOperationsListSecurityOption4)
    ], DnsManagedZoneOperationsListSecurity.prototype, "option4", void 0);
    return DnsManagedZoneOperationsListSecurity;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsListSecurity };
var DnsManagedZoneOperationsListRequest = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsListRequest, _super);
    function DnsManagedZoneOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZoneOperationsListPathParams)
    ], DnsManagedZoneOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZoneOperationsListQueryParams)
    ], DnsManagedZoneOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZoneOperationsListSecurity)
    ], DnsManagedZoneOperationsListRequest.prototype, "security", void 0);
    return DnsManagedZoneOperationsListRequest;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsListRequest };
var DnsManagedZoneOperationsListResponse = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsListResponse, _super);
    function DnsManagedZoneOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagedZoneOperationsListResponse)
    ], DnsManagedZoneOperationsListResponse.prototype, "managedZoneOperationsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsManagedZoneOperationsListResponse.prototype, "statusCode", void 0);
    return DnsManagedZoneOperationsListResponse;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsListResponse };
