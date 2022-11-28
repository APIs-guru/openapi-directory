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
var GetManagedStatsSecurity = /** @class */ (function (_super) {
    __extends(GetManagedStatsSecurity, _super);
    function GetManagedStatsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetManagedStatsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetManagedStatsSecurity.prototype, "oauth", void 0);
    return GetManagedStatsSecurity;
}(SpeakeasyBase));
export { GetManagedStatsSecurity };
var GetManagedStats200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetManagedStats200ApplicationJson, _super);
    function GetManagedStats200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetManagedStats200ApplicationJson.prototype, "data", void 0);
    return GetManagedStats200ApplicationJson;
}(SpeakeasyBase));
export { GetManagedStats200ApplicationJson };
var GetManagedStatsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetManagedStatsDefaultApplicationJson, _super);
    function GetManagedStatsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetManagedStatsDefaultApplicationJson.prototype, "errors", void 0);
    return GetManagedStatsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetManagedStatsDefaultApplicationJson };
var GetManagedStatsRequest = /** @class */ (function (_super) {
    __extends(GetManagedStatsRequest, _super);
    function GetManagedStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedStatsSecurity)
    ], GetManagedStatsRequest.prototype, "security", void 0);
    return GetManagedStatsRequest;
}(SpeakeasyBase));
export { GetManagedStatsRequest };
var GetManagedStatsResponse = /** @class */ (function (_super) {
    __extends(GetManagedStatsResponse, _super);
    function GetManagedStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetManagedStatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetManagedStatsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedStats200ApplicationJson)
    ], GetManagedStatsResponse.prototype, "getManagedStats200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedStatsDefaultApplicationJson)
    ], GetManagedStatsResponse.prototype, "getManagedStatsDefaultApplicationJsonObject", void 0);
    return GetManagedStatsResponse;
}(SpeakeasyBase));
export { GetManagedStatsResponse };
