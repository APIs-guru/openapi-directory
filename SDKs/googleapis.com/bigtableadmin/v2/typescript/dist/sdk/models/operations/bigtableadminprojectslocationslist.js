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
var BigtableadminProjectsLocationsListPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsListPathParams, _super);
    function BigtableadminProjectsLocationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsListPathParams.prototype, "name", void 0);
    return BigtableadminProjectsLocationsListPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsListPathParams };
var BigtableadminProjectsLocationsListQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsListQueryParams, _super);
    function BigtableadminProjectsLocationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigtableadminProjectsLocationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsLocationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsListQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsLocationsListQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsListQueryParams };
var BigtableadminProjectsLocationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsListSecurityOption1, _super);
    function BigtableadminProjectsLocationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsLocationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsLocationsListSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsLocationsListSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsListSecurityOption1 };
var BigtableadminProjectsLocationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsListSecurityOption2, _super);
    function BigtableadminProjectsLocationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsLocationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsLocationsListSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsLocationsListSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsListSecurityOption2 };
var BigtableadminProjectsLocationsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsListSecurityOption3, _super);
    function BigtableadminProjectsLocationsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsLocationsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsLocationsListSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsLocationsListSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsListSecurityOption3 };
var BigtableadminProjectsLocationsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsListSecurityOption4, _super);
    function BigtableadminProjectsLocationsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsLocationsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsLocationsListSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsLocationsListSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsListSecurityOption4 };
var BigtableadminProjectsLocationsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsListSecurityOption5, _super);
    function BigtableadminProjectsLocationsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsLocationsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsLocationsListSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsLocationsListSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsListSecurityOption5 };
var BigtableadminProjectsLocationsListSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsListSecurityOption6, _super);
    function BigtableadminProjectsLocationsListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsLocationsListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsLocationsListSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsLocationsListSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsListSecurityOption6 };
var BigtableadminProjectsLocationsListSecurityOption7 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsListSecurityOption7, _super);
    function BigtableadminProjectsLocationsListSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsLocationsListSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsLocationsListSecurityOption7.prototype, "oauth2c", void 0);
    return BigtableadminProjectsLocationsListSecurityOption7;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsListSecurityOption7 };
var BigtableadminProjectsLocationsListSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsListSecurity, _super);
    function BigtableadminProjectsLocationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsLocationsListSecurityOption1)
    ], BigtableadminProjectsLocationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsLocationsListSecurityOption2)
    ], BigtableadminProjectsLocationsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsLocationsListSecurityOption3)
    ], BigtableadminProjectsLocationsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsLocationsListSecurityOption4)
    ], BigtableadminProjectsLocationsListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsLocationsListSecurityOption5)
    ], BigtableadminProjectsLocationsListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsLocationsListSecurityOption6)
    ], BigtableadminProjectsLocationsListSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsLocationsListSecurityOption7)
    ], BigtableadminProjectsLocationsListSecurity.prototype, "option7", void 0);
    return BigtableadminProjectsLocationsListSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsListSecurity };
var BigtableadminProjectsLocationsListRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsListRequest, _super);
    function BigtableadminProjectsLocationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsLocationsListPathParams)
    ], BigtableadminProjectsLocationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsLocationsListQueryParams)
    ], BigtableadminProjectsLocationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsLocationsListSecurity)
    ], BigtableadminProjectsLocationsListRequest.prototype, "security", void 0);
    return BigtableadminProjectsLocationsListRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsListRequest };
var BigtableadminProjectsLocationsListResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsListResponse, _super);
    function BigtableadminProjectsLocationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListLocationsResponse)
    ], BigtableadminProjectsLocationsListResponse.prototype, "listLocationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsLocationsListResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsLocationsListResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsListResponse };
