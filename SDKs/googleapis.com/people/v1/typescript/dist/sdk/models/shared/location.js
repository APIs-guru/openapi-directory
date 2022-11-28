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
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
// Location
/**
 * A person's location.
**/
var Location = /** @class */ (function (_super) {
    __extends(Location, _super);
    function Location() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildingId" }),
        __metadata("design:type", String)
    ], Location.prototype, "buildingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current" }),
        __metadata("design:type", Boolean)
    ], Location.prototype, "current", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deskCode" }),
        __metadata("design:type", String)
    ], Location.prototype, "deskCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floor" }),
        __metadata("design:type", String)
    ], Location.prototype, "floor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floorSection" }),
        __metadata("design:type", String)
    ], Location.prototype, "floorSection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", FieldMetadata)
    ], Location.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Location.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], Location.prototype, "value", void 0);
    return Location;
}(SpeakeasyBase));
export { Location };
// LocationInput
/**
 * A person's location.
**/
var LocationInput = /** @class */ (function (_super) {
    __extends(LocationInput, _super);
    function LocationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildingId" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "buildingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current" }),
        __metadata("design:type", Boolean)
    ], LocationInput.prototype, "current", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deskCode" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "deskCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floor" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "floor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floorSection" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "floorSection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", FieldMetadataInput)
    ], LocationInput.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "value", void 0);
    return LocationInput;
}(SpeakeasyBase));
export { LocationInput };
