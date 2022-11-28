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
import { AndroidDeviceCatalog } from "./androiddevicecatalog";
import { DeviceIpBlockCatalog } from "./deviceipblockcatalog";
import { IosDeviceCatalog } from "./iosdevicecatalog";
import { NetworkConfigurationCatalog } from "./networkconfigurationcatalog";
import { ProvidedSoftwareCatalog } from "./providedsoftwarecatalog";
// TestEnvironmentCatalog
/**
 * A description of a test environment.
**/
var TestEnvironmentCatalog = /** @class */ (function (_super) {
    __extends(TestEnvironmentCatalog, _super);
    function TestEnvironmentCatalog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidDeviceCatalog" }),
        __metadata("design:type", AndroidDeviceCatalog)
    ], TestEnvironmentCatalog.prototype, "androidDeviceCatalog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceIpBlockCatalog" }),
        __metadata("design:type", DeviceIpBlockCatalog)
    ], TestEnvironmentCatalog.prototype, "deviceIpBlockCatalog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iosDeviceCatalog" }),
        __metadata("design:type", IosDeviceCatalog)
    ], TestEnvironmentCatalog.prototype, "iosDeviceCatalog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfigurationCatalog" }),
        __metadata("design:type", NetworkConfigurationCatalog)
    ], TestEnvironmentCatalog.prototype, "networkConfigurationCatalog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=softwareCatalog" }),
        __metadata("design:type", ProvidedSoftwareCatalog)
    ], TestEnvironmentCatalog.prototype, "softwareCatalog", void 0);
    return TestEnvironmentCatalog;
}(SpeakeasyBase));
export { TestEnvironmentCatalog };
