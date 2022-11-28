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
var PutHooksIdJsonPathParams = /** @class */ (function (_super) {
    __extends(PutHooksIdJsonPathParams, _super);
    function PutHooksIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutHooksIdJsonPathParams.prototype, "id", void 0);
    return PutHooksIdJsonPathParams;
}(SpeakeasyBase));
export { PutHooksIdJsonPathParams };
var PutHooksIdJsonQueryParams = /** @class */ (function (_super) {
    __extends(PutHooksIdJsonQueryParams, _super);
    function PutHooksIdJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], PutHooksIdJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], PutHooksIdJsonQueryParams.prototype, "login", void 0);
    return PutHooksIdJsonQueryParams;
}(SpeakeasyBase));
export { PutHooksIdJsonQueryParams };
var PutHooksIdJsonRequest = /** @class */ (function (_super) {
    __extends(PutHooksIdJsonRequest, _super);
    function PutHooksIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutHooksIdJsonPathParams)
    ], PutHooksIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutHooksIdJsonQueryParams)
    ], PutHooksIdJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HookEdit)
    ], PutHooksIdJsonRequest.prototype, "request", void 0);
    return PutHooksIdJsonRequest;
}(SpeakeasyBase));
export { PutHooksIdJsonRequest };
var PutHooksIdJsonResponse = /** @class */ (function (_super) {
    __extends(PutHooksIdJsonResponse, _super);
    function PutHooksIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutHooksIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Hook)
    ], PutHooksIdJsonResponse.prototype, "hook", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutHooksIdJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutHooksIdJsonResponse.prototype, "statusCode", void 0);
    return PutHooksIdJsonResponse;
}(SpeakeasyBase));
export { PutHooksIdJsonResponse };
