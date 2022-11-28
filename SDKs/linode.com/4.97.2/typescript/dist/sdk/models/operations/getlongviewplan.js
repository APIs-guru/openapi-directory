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
var GetLongviewPlanSecurity = /** @class */ (function (_super) {
    __extends(GetLongviewPlanSecurity, _super);
    function GetLongviewPlanSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLongviewPlanSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLongviewPlanSecurity.prototype, "oauth", void 0);
    return GetLongviewPlanSecurity;
}(SpeakeasyBase));
export { GetLongviewPlanSecurity };
var GetLongviewPlanDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLongviewPlanDefaultApplicationJson, _super);
    function GetLongviewPlanDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLongviewPlanDefaultApplicationJson.prototype, "errors", void 0);
    return GetLongviewPlanDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLongviewPlanDefaultApplicationJson };
var GetLongviewPlanRequest = /** @class */ (function (_super) {
    __extends(GetLongviewPlanRequest, _super);
    function GetLongviewPlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLongviewPlanSecurity)
    ], GetLongviewPlanRequest.prototype, "security", void 0);
    return GetLongviewPlanRequest;
}(SpeakeasyBase));
export { GetLongviewPlanRequest };
var GetLongviewPlanResponse = /** @class */ (function (_super) {
    __extends(GetLongviewPlanResponse, _super);
    function GetLongviewPlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLongviewPlanResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LongviewSubscription)
    ], GetLongviewPlanResponse.prototype, "longviewSubscription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLongviewPlanResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLongviewPlanDefaultApplicationJson)
    ], GetLongviewPlanResponse.prototype, "getLongviewPlanDefaultApplicationJsonObject", void 0);
    return GetLongviewPlanResponse;
}(SpeakeasyBase));
export { GetLongviewPlanResponse };
