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
var BigtableadminProjectsInstancesTablesCheckConsistencyPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCheckConsistencyPathParams, _super);
    function BigtableadminProjectsInstancesTablesCheckConsistencyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyPathParams.prototype, "name", void 0);
    return BigtableadminProjectsInstancesTablesCheckConsistencyPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCheckConsistencyPathParams };
var BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams, _super);
    function BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams };
var BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1, _super);
    function BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1 };
var BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2, _super);
    function BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2 };
var BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3, _super);
    function BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3 };
var BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4, _super);
    function BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4 };
var BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5, _super);
    function BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5 };
var BigtableadminProjectsInstancesTablesCheckConsistencySecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCheckConsistencySecurity, _super);
    function BigtableadminProjectsInstancesTablesCheckConsistencySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1)
    ], BigtableadminProjectsInstancesTablesCheckConsistencySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2)
    ], BigtableadminProjectsInstancesTablesCheckConsistencySecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3)
    ], BigtableadminProjectsInstancesTablesCheckConsistencySecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4)
    ], BigtableadminProjectsInstancesTablesCheckConsistencySecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5)
    ], BigtableadminProjectsInstancesTablesCheckConsistencySecurity.prototype, "option5", void 0);
    return BigtableadminProjectsInstancesTablesCheckConsistencySecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCheckConsistencySecurity };
var BigtableadminProjectsInstancesTablesCheckConsistencyRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCheckConsistencyRequest, _super);
    function BigtableadminProjectsInstancesTablesCheckConsistencyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesCheckConsistencyPathParams)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CheckConsistencyRequest)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesCheckConsistencySecurity)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesTablesCheckConsistencyRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCheckConsistencyRequest };
var BigtableadminProjectsInstancesTablesCheckConsistencyResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCheckConsistencyResponse, _super);
    function BigtableadminProjectsInstancesTablesCheckConsistencyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CheckConsistencyResponse)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyResponse.prototype, "checkConsistencyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesTablesCheckConsistencyResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesTablesCheckConsistencyResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCheckConsistencyResponse };
