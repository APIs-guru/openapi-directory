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
// GoogleCloudRetailV2RemoveFulfillmentPlacesRequest
/**
 * Request message for ProductService.RemoveFulfillmentPlaces method.
**/
var GoogleCloudRetailV2RemoveFulfillmentPlacesRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2RemoveFulfillmentPlacesRequest, _super);
    function GoogleCloudRetailV2RemoveFulfillmentPlacesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowMissing" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudRetailV2RemoveFulfillmentPlacesRequest.prototype, "allowMissing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placeIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2RemoveFulfillmentPlacesRequest.prototype, "placeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=removeTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2RemoveFulfillmentPlacesRequest.prototype, "removeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2RemoveFulfillmentPlacesRequest.prototype, "type", void 0);
    return GoogleCloudRetailV2RemoveFulfillmentPlacesRequest;
}(SpeakeasyBase));
export { GoogleCloudRetailV2RemoveFulfillmentPlacesRequest };
