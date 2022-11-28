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
var BigtableadminProjectsInstancesTablesDropRowRangePathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDropRowRangePathParams, _super);
    function BigtableadminProjectsInstancesTablesDropRowRangePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDropRowRangePathParams.prototype, "name", void 0);
    return BigtableadminProjectsInstancesTablesDropRowRangePathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDropRowRangePathParams };
var BigtableadminProjectsInstancesTablesDropRowRangeQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDropRowRangeQueryParams, _super);
    function BigtableadminProjectsInstancesTablesDropRowRangeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDropRowRangeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDropRowRangeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDropRowRangeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDropRowRangeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDropRowRangeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDropRowRangeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDropRowRangeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesTablesDropRowRangeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDropRowRangeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDropRowRangeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDropRowRangeQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesTablesDropRowRangeQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDropRowRangeQueryParams };
var BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1, _super);
    function BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1 };
var BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2, _super);
    function BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2 };
var BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3, _super);
    function BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3 };
var BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4, _super);
    function BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4 };
var BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5, _super);
    function BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5 };
var BigtableadminProjectsInstancesTablesDropRowRangeSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDropRowRangeSecurity, _super);
    function BigtableadminProjectsInstancesTablesDropRowRangeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1)
    ], BigtableadminProjectsInstancesTablesDropRowRangeSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2)
    ], BigtableadminProjectsInstancesTablesDropRowRangeSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3)
    ], BigtableadminProjectsInstancesTablesDropRowRangeSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4)
    ], BigtableadminProjectsInstancesTablesDropRowRangeSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5)
    ], BigtableadminProjectsInstancesTablesDropRowRangeSecurity.prototype, "option5", void 0);
    return BigtableadminProjectsInstancesTablesDropRowRangeSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDropRowRangeSecurity };
var BigtableadminProjectsInstancesTablesDropRowRangeRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDropRowRangeRequest, _super);
    function BigtableadminProjectsInstancesTablesDropRowRangeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDropRowRangePathParams)
    ], BigtableadminProjectsInstancesTablesDropRowRangeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDropRowRangeQueryParams)
    ], BigtableadminProjectsInstancesTablesDropRowRangeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DropRowRangeRequest)
    ], BigtableadminProjectsInstancesTablesDropRowRangeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDropRowRangeSecurity)
    ], BigtableadminProjectsInstancesTablesDropRowRangeRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesTablesDropRowRangeRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDropRowRangeRequest };
var BigtableadminProjectsInstancesTablesDropRowRangeResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDropRowRangeResponse, _super);
    function BigtableadminProjectsInstancesTablesDropRowRangeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDropRowRangeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], BigtableadminProjectsInstancesTablesDropRowRangeResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesTablesDropRowRangeResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesTablesDropRowRangeResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDropRowRangeResponse };
