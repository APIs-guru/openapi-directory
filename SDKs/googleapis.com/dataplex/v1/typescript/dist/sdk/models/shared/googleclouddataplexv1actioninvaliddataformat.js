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
// GoogleCloudDataplexV1ActionInvalidDataFormat
/**
 * Action details for invalid or unsupported data files detected by discovery.
**/
var GoogleCloudDataplexV1ActionInvalidDataFormat = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1ActionInvalidDataFormat, _super);
    function GoogleCloudDataplexV1ActionInvalidDataFormat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectedFormat" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1ActionInvalidDataFormat.prototype, "expectedFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newFormat" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1ActionInvalidDataFormat.prototype, "newFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampledDataLocations" }),
        __metadata("design:type", Array)
    ], GoogleCloudDataplexV1ActionInvalidDataFormat.prototype, "sampledDataLocations", void 0);
    return GoogleCloudDataplexV1ActionInvalidDataFormat;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1ActionInvalidDataFormat };
