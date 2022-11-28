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
var MigrateLinodeInstancePathParams = /** @class */ (function (_super) {
    __extends(MigrateLinodeInstancePathParams, _super);
    function MigrateLinodeInstancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], MigrateLinodeInstancePathParams.prototype, "linodeId", void 0);
    return MigrateLinodeInstancePathParams;
}(SpeakeasyBase));
export { MigrateLinodeInstancePathParams };
var MigrateLinodeInstanceSecurity = /** @class */ (function (_super) {
    __extends(MigrateLinodeInstanceSecurity, _super);
    function MigrateLinodeInstanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], MigrateLinodeInstanceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], MigrateLinodeInstanceSecurity.prototype, "oauth", void 0);
    return MigrateLinodeInstanceSecurity;
}(SpeakeasyBase));
export { MigrateLinodeInstanceSecurity };
var MigrateLinodeInstanceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(MigrateLinodeInstanceDefaultApplicationJson, _super);
    function MigrateLinodeInstanceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], MigrateLinodeInstanceDefaultApplicationJson.prototype, "errors", void 0);
    return MigrateLinodeInstanceDefaultApplicationJson;
}(SpeakeasyBase));
export { MigrateLinodeInstanceDefaultApplicationJson };
var MigrateLinodeInstanceRequest = /** @class */ (function (_super) {
    __extends(MigrateLinodeInstanceRequest, _super);
    function MigrateLinodeInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MigrateLinodeInstancePathParams)
    ], MigrateLinodeInstanceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], MigrateLinodeInstanceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MigrateLinodeInstanceSecurity)
    ], MigrateLinodeInstanceRequest.prototype, "security", void 0);
    return MigrateLinodeInstanceRequest;
}(SpeakeasyBase));
export { MigrateLinodeInstanceRequest };
var MigrateLinodeInstanceResponse = /** @class */ (function (_super) {
    __extends(MigrateLinodeInstanceResponse, _super);
    function MigrateLinodeInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MigrateLinodeInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MigrateLinodeInstanceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], MigrateLinodeInstanceResponse.prototype, "migrateLinodeInstance200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MigrateLinodeInstanceDefaultApplicationJson)
    ], MigrateLinodeInstanceResponse.prototype, "migrateLinodeInstanceDefaultApplicationJsonObject", void 0);
    return MigrateLinodeInstanceResponse;
}(SpeakeasyBase));
export { MigrateLinodeInstanceResponse };
