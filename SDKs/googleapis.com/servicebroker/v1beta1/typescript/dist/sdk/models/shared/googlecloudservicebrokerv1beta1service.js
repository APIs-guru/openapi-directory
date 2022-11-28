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
import { GoogleCloudServicebrokerV1beta1DashboardClient } from "./googlecloudservicebrokerv1beta1dashboardclient";
import { GoogleCloudServicebrokerV1beta1Plan } from "./googlecloudservicebrokerv1beta1plan";
// GoogleCloudServicebrokerV1beta1Service
/**
 * The resource model mostly follows the Open Service Broker API, as
 * described here:
 * https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md
 * Though due to Google Specifics it has additional optional fields.
**/
var GoogleCloudServicebrokerV1beta1Service = /** @class */ (function (_super) {
    __extends(GoogleCloudServicebrokerV1beta1Service, _super);
    function GoogleCloudServicebrokerV1beta1Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], GoogleCloudServicebrokerV1beta1Service.prototype, "bindable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], GoogleCloudServicebrokerV1beta1Service.prototype, "bindingRetrievable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], GoogleCloudServicebrokerV1beta1Service.prototype, "bindingsRetrievable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GoogleCloudServicebrokerV1beta1DashboardClient)
    ], GoogleCloudServicebrokerV1beta1Service.prototype, "dashboardClient", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GoogleCloudServicebrokerV1beta1Service.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GoogleCloudServicebrokerV1beta1Service.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], GoogleCloudServicebrokerV1beta1Service.prototype, "instancesRetrievable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GoogleCloudServicebrokerV1beta1Service.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GoogleCloudServicebrokerV1beta1Service.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], GoogleCloudServicebrokerV1beta1Service.prototype, "planUpdateable", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GoogleCloudServicebrokerV1beta1Plan }),
        __metadata("design:type", Array)
    ], GoogleCloudServicebrokerV1beta1Service.prototype, "plans", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GoogleCloudServicebrokerV1beta1Service.prototype, "tags", void 0);
    return GoogleCloudServicebrokerV1beta1Service;
}(SpeakeasyBase));
export { GoogleCloudServicebrokerV1beta1Service };
