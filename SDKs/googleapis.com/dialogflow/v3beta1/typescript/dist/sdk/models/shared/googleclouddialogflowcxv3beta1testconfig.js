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
// GoogleCloudDialogflowCxV3beta1TestConfig
/**
 * Represents configurations for a test case.
**/
var GoogleCloudDialogflowCxV3beta1TestConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1TestConfig, _super);
    function GoogleCloudDialogflowCxV3beta1TestConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flow" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestConfig.prototype, "flow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1TestConfig.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingParameters" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1TestConfig.prototype, "trackingParameters", void 0);
    return GoogleCloudDialogflowCxV3beta1TestConfig;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1TestConfig };
