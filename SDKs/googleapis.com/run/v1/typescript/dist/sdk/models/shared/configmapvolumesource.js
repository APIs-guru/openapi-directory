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
import { KeyToPath } from "./keytopath";
// ConfigMapVolumeSource
/**
 * Not supported by Cloud Run. Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths.
**/
var ConfigMapVolumeSource = /** @class */ (function (_super) {
    __extends(ConfigMapVolumeSource, _super);
    function ConfigMapVolumeSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultMode" }),
        __metadata("design:type", Number)
    ], ConfigMapVolumeSource.prototype, "defaultMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: KeyToPath }),
        __metadata("design:type", Array)
    ], ConfigMapVolumeSource.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConfigMapVolumeSource.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optional" }),
        __metadata("design:type", Boolean)
    ], ConfigMapVolumeSource.prototype, "optional", void 0);
    return ConfigMapVolumeSource;
}(SpeakeasyBase));
export { ConfigMapVolumeSource };
