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
var MonitoringServicesServiceLevelObjectivesDeletePathParams = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesDeletePathParams, _super);
    function MonitoringServicesServiceLevelObjectivesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesDeletePathParams.prototype, "name", void 0);
    return MonitoringServicesServiceLevelObjectivesDeletePathParams;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesDeletePathParams };
var MonitoringServicesServiceLevelObjectivesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesDeleteQueryParams, _super);
    function MonitoringServicesServiceLevelObjectivesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], MonitoringServicesServiceLevelObjectivesDeleteQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringServicesServiceLevelObjectivesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringServicesServiceLevelObjectivesDeleteQueryParams;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesDeleteQueryParams };
var MonitoringServicesServiceLevelObjectivesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesDeleteSecurityOption1, _super);
    function MonitoringServicesServiceLevelObjectivesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringServicesServiceLevelObjectivesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringServicesServiceLevelObjectivesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringServicesServiceLevelObjectivesDeleteSecurityOption1;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesDeleteSecurityOption1 };
var MonitoringServicesServiceLevelObjectivesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesDeleteSecurityOption2, _super);
    function MonitoringServicesServiceLevelObjectivesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringServicesServiceLevelObjectivesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringServicesServiceLevelObjectivesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringServicesServiceLevelObjectivesDeleteSecurityOption2;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesDeleteSecurityOption2 };
var MonitoringServicesServiceLevelObjectivesDeleteSecurity = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesDeleteSecurity, _super);
    function MonitoringServicesServiceLevelObjectivesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesDeleteSecurityOption1)
    ], MonitoringServicesServiceLevelObjectivesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesDeleteSecurityOption2)
    ], MonitoringServicesServiceLevelObjectivesDeleteSecurity.prototype, "option2", void 0);
    return MonitoringServicesServiceLevelObjectivesDeleteSecurity;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesDeleteSecurity };
var MonitoringServicesServiceLevelObjectivesDeleteRequest = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesDeleteRequest, _super);
    function MonitoringServicesServiceLevelObjectivesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesDeletePathParams)
    ], MonitoringServicesServiceLevelObjectivesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesDeleteQueryParams)
    ], MonitoringServicesServiceLevelObjectivesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesDeleteSecurity)
    ], MonitoringServicesServiceLevelObjectivesDeleteRequest.prototype, "security", void 0);
    return MonitoringServicesServiceLevelObjectivesDeleteRequest;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesDeleteRequest };
var MonitoringServicesServiceLevelObjectivesDeleteResponse = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesDeleteResponse, _super);
    function MonitoringServicesServiceLevelObjectivesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], MonitoringServicesServiceLevelObjectivesDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringServicesServiceLevelObjectivesDeleteResponse.prototype, "statusCode", void 0);
    return MonitoringServicesServiceLevelObjectivesDeleteResponse;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesDeleteResponse };
