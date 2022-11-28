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
// KeyRangeLocation
/**
 * Location information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.
**/
var KeyRangeLocation = /** @class */ (function (_super) {
    __extends(KeyRangeLocation, _super);
    function KeyRangeLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataDisk" }),
        __metadata("design:type", String)
    ], KeyRangeLocation.prototype, "dataDisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryEndpoint" }),
        __metadata("design:type", String)
    ], KeyRangeLocation.prototype, "deliveryEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecatedPersistentDirectory" }),
        __metadata("design:type", String)
    ], KeyRangeLocation.prototype, "deprecatedPersistentDirectory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", String)
    ], KeyRangeLocation.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", String)
    ], KeyRangeLocation.prototype, "start", void 0);
    return KeyRangeLocation;
}(SpeakeasyBase));
export { KeyRangeLocation };
