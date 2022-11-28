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
import { GoogleCloudRetailV2betaUserEventInput } from "./googlecloudretailv2betauserevent";
// GoogleCloudRetailV2betaPredictRequestInput
/**
 * Request message for Predict method.
**/
var GoogleCloudRetailV2betaPredictRequestInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2betaPredictRequestInput, _super);
    function GoogleCloudRetailV2betaPredictRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaPredictRequestInput.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2betaPredictRequestInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageSize" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2betaPredictRequestInput.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaPredictRequestInput.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=params" }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2betaPredictRequestInput.prototype, "params", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userEvent" }),
        __metadata("design:type", GoogleCloudRetailV2betaUserEventInput)
    ], GoogleCloudRetailV2betaPredictRequestInput.prototype, "userEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudRetailV2betaPredictRequestInput.prototype, "validateOnly", void 0);
    return GoogleCloudRetailV2betaPredictRequestInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2betaPredictRequestInput };
