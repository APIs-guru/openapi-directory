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
var MonitorKeyUsagePathParams = /** @class */ (function (_super) {
    __extends(MonitorKeyUsagePathParams, _super);
    function MonitorKeyUsagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], MonitorKeyUsagePathParams.prototype, "key", void 0);
    return MonitorKeyUsagePathParams;
}(SpeakeasyBase));
export { MonitorKeyUsagePathParams };
var MonitorKeyUsageQueryParams = /** @class */ (function (_super) {
    __extends(MonitorKeyUsageQueryParams, _super);
    function MonitorKeyUsageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", Number)
    ], MonitorKeyUsageQueryParams.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=licensee" }),
        __metadata("design:type", String)
    ], MonitorKeyUsageQueryParams.prototype, "licensee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], MonitorKeyUsageQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", String)
    ], MonitorKeyUsageQueryParams.prototype, "tags", void 0);
    return MonitorKeyUsageQueryParams;
}(SpeakeasyBase));
export { MonitorKeyUsageQueryParams };
var MonitorKeyUsageSecurity = /** @class */ (function (_super) {
    __extends(MonitorKeyUsageSecurity, _super);
    function MonitorKeyUsageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MonitorKeyUsageSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeUserToken)
    ], MonitorKeyUsageSecurity.prototype, "userToken", void 0);
    return MonitorKeyUsageSecurity;
}(SpeakeasyBase));
export { MonitorKeyUsageSecurity };
var MonitorKeyUsageRequest = /** @class */ (function (_super) {
    __extends(MonitorKeyUsageRequest, _super);
    function MonitorKeyUsageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitorKeyUsagePathParams)
    ], MonitorKeyUsageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitorKeyUsageQueryParams)
    ], MonitorKeyUsageRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitorKeyUsageSecurity)
    ], MonitorKeyUsageRequest.prototype, "security", void 0);
    return MonitorKeyUsageRequest;
}(SpeakeasyBase));
export { MonitorKeyUsageRequest };
var MonitorKeyUsageResponse = /** @class */ (function (_super) {
    __extends(MonitorKeyUsageResponse, _super);
    function MonitorKeyUsageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitorKeyUsageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseSchema)
    ], MonitorKeyUsageResponse.prototype, "errorResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.KeyUsageResponseSchema)
    ], MonitorKeyUsageResponse.prototype, "keyUsageResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitorKeyUsageResponse.prototype, "statusCode", void 0);
    return MonitorKeyUsageResponse;
}(SpeakeasyBase));
export { MonitorKeyUsageResponse };
