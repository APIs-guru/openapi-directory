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
import { Airport } from "./airport";
import { Link } from "./link";
// AirportResourceAirports
/**
 * Container for airport elements.
**/
var AirportResourceAirports = /** @class */ (function (_super) {
    __extends(AirportResourceAirports, _super);
    function AirportResourceAirports() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Airport" }),
        __metadata("design:type", Airport)
    ], AirportResourceAirports.prototype, "airport", void 0);
    return AirportResourceAirports;
}(SpeakeasyBase));
export { AirportResourceAirports };
// AirportResourceMeta
/**
 * Container for meta links.
**/
var AirportResourceMeta = /** @class */ (function (_super) {
    __extends(AirportResourceMeta, _super);
    function AirportResourceMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@Version" }),
        __metadata("design:type", String)
    ], AirportResourceMeta.prototype, "atVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Link", elemType: Link }),
        __metadata("design:type", Array)
    ], AirportResourceMeta.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalCount" }),
        __metadata("design:type", Number)
    ], AirportResourceMeta.prototype, "totalCount", void 0);
    return AirportResourceMeta;
}(SpeakeasyBase));
export { AirportResourceMeta };
// AirportResource
/**
 * Root element of airport response.
**/
var AirportResource = /** @class */ (function (_super) {
    __extends(AirportResource, _super);
    function AirportResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Airports" }),
        __metadata("design:type", AirportResourceAirports)
    ], AirportResource.prototype, "airports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", AirportResourceMeta)
    ], AirportResource.prototype, "meta", void 0);
    return AirportResource;
}(SpeakeasyBase));
export { AirportResource };
