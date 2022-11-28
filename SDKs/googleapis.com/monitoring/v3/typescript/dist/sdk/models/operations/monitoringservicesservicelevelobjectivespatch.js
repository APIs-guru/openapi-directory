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
var MonitoringServicesServiceLevelObjectivesPatchPathParams = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesPatchPathParams, _super);
    function MonitoringServicesServiceLevelObjectivesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesPatchPathParams.prototype, "name", void 0);
    return MonitoringServicesServiceLevelObjectivesPatchPathParams;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesPatchPathParams };
var MonitoringServicesServiceLevelObjectivesPatchQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesPatchQueryParams, _super);
    function MonitoringServicesServiceLevelObjectivesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringServicesServiceLevelObjectivesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringServicesServiceLevelObjectivesPatchQueryParams;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesPatchQueryParams };
var MonitoringServicesServiceLevelObjectivesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesPatchSecurityOption1, _super);
    function MonitoringServicesServiceLevelObjectivesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringServicesServiceLevelObjectivesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringServicesServiceLevelObjectivesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringServicesServiceLevelObjectivesPatchSecurityOption1;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesPatchSecurityOption1 };
var MonitoringServicesServiceLevelObjectivesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesPatchSecurityOption2, _super);
    function MonitoringServicesServiceLevelObjectivesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringServicesServiceLevelObjectivesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringServicesServiceLevelObjectivesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringServicesServiceLevelObjectivesPatchSecurityOption2;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesPatchSecurityOption2 };
var MonitoringServicesServiceLevelObjectivesPatchSecurity = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesPatchSecurity, _super);
    function MonitoringServicesServiceLevelObjectivesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesPatchSecurityOption1)
    ], MonitoringServicesServiceLevelObjectivesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesPatchSecurityOption2)
    ], MonitoringServicesServiceLevelObjectivesPatchSecurity.prototype, "option2", void 0);
    return MonitoringServicesServiceLevelObjectivesPatchSecurity;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesPatchSecurity };
var MonitoringServicesServiceLevelObjectivesPatchRequest = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesPatchRequest, _super);
    function MonitoringServicesServiceLevelObjectivesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesPatchPathParams)
    ], MonitoringServicesServiceLevelObjectivesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesPatchQueryParams)
    ], MonitoringServicesServiceLevelObjectivesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ServiceLevelObjective)
    ], MonitoringServicesServiceLevelObjectivesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesPatchSecurity)
    ], MonitoringServicesServiceLevelObjectivesPatchRequest.prototype, "security", void 0);
    return MonitoringServicesServiceLevelObjectivesPatchRequest;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesPatchRequest };
var MonitoringServicesServiceLevelObjectivesPatchResponse = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesPatchResponse, _super);
    function MonitoringServicesServiceLevelObjectivesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceLevelObjective)
    ], MonitoringServicesServiceLevelObjectivesPatchResponse.prototype, "serviceLevelObjective", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringServicesServiceLevelObjectivesPatchResponse.prototype, "statusCode", void 0);
    return MonitoringServicesServiceLevelObjectivesPatchResponse;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesPatchResponse };
