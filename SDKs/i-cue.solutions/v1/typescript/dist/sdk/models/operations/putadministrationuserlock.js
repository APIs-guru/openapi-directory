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
var PutAdministrationUserLockHeaders = /** @class */ (function (_super) {
    __extends(PutAdministrationUserLockHeaders, _super);
    function PutAdministrationUserLockHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" }),
        __metadata("design:type", String)
    ], PutAdministrationUserLockHeaders.prototype, "token", void 0);
    return PutAdministrationUserLockHeaders;
}(SpeakeasyBase));
export { PutAdministrationUserLockHeaders };
var PutAdministrationUserLockRequests = /** @class */ (function (_super) {
    __extends(PutAdministrationUserLockRequests, _super);
    function PutAdministrationUserLockRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ToggleUserRequest)
    ], PutAdministrationUserLockRequests.prototype, "toggleUserRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ToggleUserRequest)
    ], PutAdministrationUserLockRequests.prototype, "toggleUserRequest1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ToggleUserRequest)
    ], PutAdministrationUserLockRequests.prototype, "toggleUserRequest2", void 0);
    return PutAdministrationUserLockRequests;
}(SpeakeasyBase));
export { PutAdministrationUserLockRequests };
var PutAdministrationUserLockRequest = /** @class */ (function (_super) {
    __extends(PutAdministrationUserLockRequest, _super);
    function PutAdministrationUserLockRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAdministrationUserLockHeaders)
    ], PutAdministrationUserLockRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAdministrationUserLockRequests)
    ], PutAdministrationUserLockRequest.prototype, "request", void 0);
    return PutAdministrationUserLockRequest;
}(SpeakeasyBase));
export { PutAdministrationUserLockRequest };
var PutAdministrationUserLockResponse = /** @class */ (function (_super) {
    __extends(PutAdministrationUserLockResponse, _super);
    function PutAdministrationUserLockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutAdministrationUserLockResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutAdministrationUserLockResponse.prototype, "statusCode", void 0);
    return PutAdministrationUserLockResponse;
}(SpeakeasyBase));
export { PutAdministrationUserLockResponse };
