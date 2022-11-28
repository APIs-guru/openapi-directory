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
var PubsubProjectsSnapshotsDeletePathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsDeletePathParams, _super);
    function PubsubProjectsSnapshotsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=snapshot" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsDeletePathParams.prototype, "snapshot", void 0);
    return PubsubProjectsSnapshotsDeletePathParams;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsDeletePathParams };
var PubsubProjectsSnapshotsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsDeleteQueryParams, _super);
    function PubsubProjectsSnapshotsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSnapshotsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsSnapshotsDeleteQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsDeleteQueryParams };
var PubsubProjectsSnapshotsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsDeleteSecurityOption1, _super);
    function PubsubProjectsSnapshotsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSnapshotsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSnapshotsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSnapshotsDeleteSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsDeleteSecurityOption1 };
var PubsubProjectsSnapshotsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsDeleteSecurityOption2, _super);
    function PubsubProjectsSnapshotsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSnapshotsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSnapshotsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSnapshotsDeleteSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsDeleteSecurityOption2 };
var PubsubProjectsSnapshotsDeleteSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsDeleteSecurity, _super);
    function PubsubProjectsSnapshotsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSnapshotsDeleteSecurityOption1)
    ], PubsubProjectsSnapshotsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSnapshotsDeleteSecurityOption2)
    ], PubsubProjectsSnapshotsDeleteSecurity.prototype, "option2", void 0);
    return PubsubProjectsSnapshotsDeleteSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsDeleteSecurity };
var PubsubProjectsSnapshotsDeleteRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsDeleteRequest, _super);
    function PubsubProjectsSnapshotsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSnapshotsDeletePathParams)
    ], PubsubProjectsSnapshotsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSnapshotsDeleteQueryParams)
    ], PubsubProjectsSnapshotsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSnapshotsDeleteSecurity)
    ], PubsubProjectsSnapshotsDeleteRequest.prototype, "security", void 0);
    return PubsubProjectsSnapshotsDeleteRequest;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsDeleteRequest };
var PubsubProjectsSnapshotsDeleteResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsDeleteResponse, _super);
    function PubsubProjectsSnapshotsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PubsubProjectsSnapshotsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSnapshotsDeleteResponse.prototype, "statusCode", void 0);
    return PubsubProjectsSnapshotsDeleteResponse;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsDeleteResponse };
