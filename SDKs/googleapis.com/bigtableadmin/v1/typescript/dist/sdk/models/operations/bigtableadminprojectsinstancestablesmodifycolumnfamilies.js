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
var BigtableadminProjectsInstancesTablesModifyColumnFamiliesPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesModifyColumnFamiliesPathParams, _super);
    function BigtableadminProjectsInstancesTablesModifyColumnFamiliesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesPathParams.prototype, "name", void 0);
    return BigtableadminProjectsInstancesTablesModifyColumnFamiliesPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesModifyColumnFamiliesPathParams };
var BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams, _super);
    function BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams };
var BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1, _super);
    function BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1 };
var BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption2, _super);
    function BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption2 };
var BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption3, _super);
    function BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption3 };
var BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption4, _super);
    function BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption4 };
var BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption5, _super);
    function BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption5 };
var BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity, _super);
    function BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption2)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption3)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption4)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption5)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity.prototype, "option5", void 0);
    return BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity };
var BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest, _super);
    function BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesModifyColumnFamiliesPathParams)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifyColumnFamiliesRequest)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest };
var BigtableadminProjectsInstancesTablesModifyColumnFamiliesResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesModifyColumnFamiliesResponse, _super);
    function BigtableadminProjectsInstancesTablesModifyColumnFamiliesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Table)
    ], BigtableadminProjectsInstancesTablesModifyColumnFamiliesResponse.prototype, "table", void 0);
    return BigtableadminProjectsInstancesTablesModifyColumnFamiliesResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesModifyColumnFamiliesResponse };
