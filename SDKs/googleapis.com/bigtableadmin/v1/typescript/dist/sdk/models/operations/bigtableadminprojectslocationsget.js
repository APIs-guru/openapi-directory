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
var BigtableadminProjectsLocationsGetPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsGetPathParams, _super);
    function BigtableadminProjectsLocationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsGetPathParams.prototype, "name", void 0);
    return BigtableadminProjectsLocationsGetPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsGetPathParams };
export var BigtableadminProjectsLocationsGetViewEnum;
(function (BigtableadminProjectsLocationsGetViewEnum) {
    BigtableadminProjectsLocationsGetViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    BigtableadminProjectsLocationsGetViewEnum["NameOnly"] = "NAME_ONLY";
    BigtableadminProjectsLocationsGetViewEnum["SchemaView"] = "SCHEMA_VIEW";
    BigtableadminProjectsLocationsGetViewEnum["ReplicationView"] = "REPLICATION_VIEW";
    BigtableadminProjectsLocationsGetViewEnum["EncryptionView"] = "ENCRYPTION_VIEW";
    BigtableadminProjectsLocationsGetViewEnum["Full"] = "FULL";
})(BigtableadminProjectsLocationsGetViewEnum || (BigtableadminProjectsLocationsGetViewEnum = {}));
var BigtableadminProjectsLocationsGetQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsGetQueryParams, _super);
    function BigtableadminProjectsLocationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsLocationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsGetQueryParams.prototype, "view", void 0);
    return BigtableadminProjectsLocationsGetQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsGetQueryParams };
var BigtableadminProjectsLocationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsGetSecurityOption1, _super);
    function BigtableadminProjectsLocationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsLocationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsLocationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsLocationsGetSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsGetSecurityOption1 };
var BigtableadminProjectsLocationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsGetSecurityOption2, _super);
    function BigtableadminProjectsLocationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsLocationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsLocationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsLocationsGetSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsGetSecurityOption2 };
var BigtableadminProjectsLocationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsGetSecurityOption3, _super);
    function BigtableadminProjectsLocationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsLocationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsLocationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsLocationsGetSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsGetSecurityOption3 };
var BigtableadminProjectsLocationsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsGetSecurityOption4, _super);
    function BigtableadminProjectsLocationsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsLocationsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsLocationsGetSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsLocationsGetSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsGetSecurityOption4 };
var BigtableadminProjectsLocationsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsGetSecurityOption5, _super);
    function BigtableadminProjectsLocationsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsLocationsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsLocationsGetSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsLocationsGetSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsGetSecurityOption5 };
var BigtableadminProjectsLocationsGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsGetSecurityOption6, _super);
    function BigtableadminProjectsLocationsGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsLocationsGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsLocationsGetSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsLocationsGetSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsGetSecurityOption6 };
var BigtableadminProjectsLocationsGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsGetSecurityOption7, _super);
    function BigtableadminProjectsLocationsGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsLocationsGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsLocationsGetSecurityOption7.prototype, "oauth2c", void 0);
    return BigtableadminProjectsLocationsGetSecurityOption7;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsGetSecurityOption7 };
var BigtableadminProjectsLocationsGetSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsGetSecurity, _super);
    function BigtableadminProjectsLocationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsLocationsGetSecurityOption1)
    ], BigtableadminProjectsLocationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsLocationsGetSecurityOption2)
    ], BigtableadminProjectsLocationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsLocationsGetSecurityOption3)
    ], BigtableadminProjectsLocationsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsLocationsGetSecurityOption4)
    ], BigtableadminProjectsLocationsGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsLocationsGetSecurityOption5)
    ], BigtableadminProjectsLocationsGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsLocationsGetSecurityOption6)
    ], BigtableadminProjectsLocationsGetSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsLocationsGetSecurityOption7)
    ], BigtableadminProjectsLocationsGetSecurity.prototype, "option7", void 0);
    return BigtableadminProjectsLocationsGetSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsGetSecurity };
var BigtableadminProjectsLocationsGetRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsGetRequest, _super);
    function BigtableadminProjectsLocationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsLocationsGetPathParams)
    ], BigtableadminProjectsLocationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsLocationsGetQueryParams)
    ], BigtableadminProjectsLocationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsLocationsGetSecurity)
    ], BigtableadminProjectsLocationsGetRequest.prototype, "security", void 0);
    return BigtableadminProjectsLocationsGetRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsGetRequest };
var BigtableadminProjectsLocationsGetResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsLocationsGetResponse, _super);
    function BigtableadminProjectsLocationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsLocationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Location)
    ], BigtableadminProjectsLocationsGetResponse.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsLocationsGetResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsLocationsGetResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsLocationsGetResponse };
