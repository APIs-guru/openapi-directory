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
var MonitoringUptimeCheckIpsListQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringUptimeCheckIpsListQueryParams, _super);
    function MonitoringUptimeCheckIpsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringUptimeCheckIpsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringUptimeCheckIpsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringUptimeCheckIpsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringUptimeCheckIpsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringUptimeCheckIpsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringUptimeCheckIpsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringUptimeCheckIpsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MonitoringUptimeCheckIpsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MonitoringUptimeCheckIpsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringUptimeCheckIpsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringUptimeCheckIpsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringUptimeCheckIpsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringUptimeCheckIpsListQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringUptimeCheckIpsListQueryParams;
}(SpeakeasyBase));
export { MonitoringUptimeCheckIpsListQueryParams };
var MonitoringUptimeCheckIpsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringUptimeCheckIpsListSecurityOption1, _super);
    function MonitoringUptimeCheckIpsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringUptimeCheckIpsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringUptimeCheckIpsListSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringUptimeCheckIpsListSecurityOption1;
}(SpeakeasyBase));
export { MonitoringUptimeCheckIpsListSecurityOption1 };
var MonitoringUptimeCheckIpsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringUptimeCheckIpsListSecurityOption2, _super);
    function MonitoringUptimeCheckIpsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringUptimeCheckIpsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringUptimeCheckIpsListSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringUptimeCheckIpsListSecurityOption2;
}(SpeakeasyBase));
export { MonitoringUptimeCheckIpsListSecurityOption2 };
var MonitoringUptimeCheckIpsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringUptimeCheckIpsListSecurityOption3, _super);
    function MonitoringUptimeCheckIpsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringUptimeCheckIpsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringUptimeCheckIpsListSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringUptimeCheckIpsListSecurityOption3;
}(SpeakeasyBase));
export { MonitoringUptimeCheckIpsListSecurityOption3 };
var MonitoringUptimeCheckIpsListSecurity = /** @class */ (function (_super) {
    __extends(MonitoringUptimeCheckIpsListSecurity, _super);
    function MonitoringUptimeCheckIpsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringUptimeCheckIpsListSecurityOption1)
    ], MonitoringUptimeCheckIpsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringUptimeCheckIpsListSecurityOption2)
    ], MonitoringUptimeCheckIpsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringUptimeCheckIpsListSecurityOption3)
    ], MonitoringUptimeCheckIpsListSecurity.prototype, "option3", void 0);
    return MonitoringUptimeCheckIpsListSecurity;
}(SpeakeasyBase));
export { MonitoringUptimeCheckIpsListSecurity };
var MonitoringUptimeCheckIpsListRequest = /** @class */ (function (_super) {
    __extends(MonitoringUptimeCheckIpsListRequest, _super);
    function MonitoringUptimeCheckIpsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringUptimeCheckIpsListQueryParams)
    ], MonitoringUptimeCheckIpsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringUptimeCheckIpsListSecurity)
    ], MonitoringUptimeCheckIpsListRequest.prototype, "security", void 0);
    return MonitoringUptimeCheckIpsListRequest;
}(SpeakeasyBase));
export { MonitoringUptimeCheckIpsListRequest };
var MonitoringUptimeCheckIpsListResponse = /** @class */ (function (_super) {
    __extends(MonitoringUptimeCheckIpsListResponse, _super);
    function MonitoringUptimeCheckIpsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringUptimeCheckIpsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListUptimeCheckIpsResponse)
    ], MonitoringUptimeCheckIpsListResponse.prototype, "listUptimeCheckIpsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringUptimeCheckIpsListResponse.prototype, "statusCode", void 0);
    return MonitoringUptimeCheckIpsListResponse;
}(SpeakeasyBase));
export { MonitoringUptimeCheckIpsListResponse };
