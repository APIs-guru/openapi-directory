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
import { GoogleCloudDiscoveryengineV1alphaUserEvent } from "./googleclouddiscoveryenginev1alphauserevent";
// GoogleCloudDiscoveryengineV1alphaRecommendRequest
/**
 * Request message for Recommend method.
**/
var GoogleCloudDiscoveryengineV1alphaRecommendRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudDiscoveryengineV1alphaRecommendRequest, _super);
    function GoogleCloudDiscoveryengineV1alphaRecommendRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudDiscoveryengineV1alphaRecommendRequest.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageSize" }),
        __metadata("design:type", Number)
    ], GoogleCloudDiscoveryengineV1alphaRecommendRequest.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=params" }),
        __metadata("design:type", Map)
    ], GoogleCloudDiscoveryengineV1alphaRecommendRequest.prototype, "params", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userEvent" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1alphaUserEvent)
    ], GoogleCloudDiscoveryengineV1alphaRecommendRequest.prototype, "userEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLabels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDiscoveryengineV1alphaRecommendRequest.prototype, "userLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDiscoveryengineV1alphaRecommendRequest.prototype, "validateOnly", void 0);
    return GoogleCloudDiscoveryengineV1alphaRecommendRequest;
}(SpeakeasyBase));
export { GoogleCloudDiscoveryengineV1alphaRecommendRequest };
