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
var CreateTimerRequestsInput = /** @class */ (function (_super) {
    __extends(CreateTimerRequestsInput, _super);
    function CreateTimerRequestsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.TimerInfoDtoInput)
    ], CreateTimerRequestsInput.prototype, "timerInfoDto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TimerInfoDtoInput)
    ], CreateTimerRequestsInput.prototype, "timerInfoDto1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.TimerInfoDtoInput)
    ], CreateTimerRequestsInput.prototype, "timerInfoDto2", void 0);
    return CreateTimerRequestsInput;
}(SpeakeasyBase));
export { CreateTimerRequestsInput };
var CreateTimerSecurity = /** @class */ (function (_super) {
    __extends(CreateTimerSecurity, _super);
    function CreateTimerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], CreateTimerSecurity.prototype, "customAuthentication", void 0);
    return CreateTimerSecurity;
}(SpeakeasyBase));
export { CreateTimerSecurity };
var CreateTimerRequest = /** @class */ (function (_super) {
    __extends(CreateTimerRequest, _super);
    function CreateTimerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTimerRequestsInput)
    ], CreateTimerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTimerSecurity)
    ], CreateTimerRequest.prototype, "security", void 0);
    return CreateTimerRequest;
}(SpeakeasyBase));
export { CreateTimerRequest };
var CreateTimerResponse = /** @class */ (function (_super) {
    __extends(CreateTimerResponse, _super);
    function CreateTimerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTimerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTimerResponse.prototype, "statusCode", void 0);
    return CreateTimerResponse;
}(SpeakeasyBase));
export { CreateTimerResponse };
