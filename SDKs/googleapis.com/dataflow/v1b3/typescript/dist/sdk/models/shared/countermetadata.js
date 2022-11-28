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
export var CounterMetadataKindEnum;
(function (CounterMetadataKindEnum) {
    CounterMetadataKindEnum["Invalid"] = "INVALID";
    CounterMetadataKindEnum["Sum"] = "SUM";
    CounterMetadataKindEnum["Max"] = "MAX";
    CounterMetadataKindEnum["Min"] = "MIN";
    CounterMetadataKindEnum["Mean"] = "MEAN";
    CounterMetadataKindEnum["Or"] = "OR";
    CounterMetadataKindEnum["And"] = "AND";
    CounterMetadataKindEnum["Set"] = "SET";
    CounterMetadataKindEnum["Distribution"] = "DISTRIBUTION";
    CounterMetadataKindEnum["LatestValue"] = "LATEST_VALUE";
})(CounterMetadataKindEnum || (CounterMetadataKindEnum = {}));
export var CounterMetadataStandardUnitsEnum;
(function (CounterMetadataStandardUnitsEnum) {
    CounterMetadataStandardUnitsEnum["Bytes"] = "BYTES";
    CounterMetadataStandardUnitsEnum["BytesPerSec"] = "BYTES_PER_SEC";
    CounterMetadataStandardUnitsEnum["Milliseconds"] = "MILLISECONDS";
    CounterMetadataStandardUnitsEnum["Microseconds"] = "MICROSECONDS";
    CounterMetadataStandardUnitsEnum["Nanoseconds"] = "NANOSECONDS";
    CounterMetadataStandardUnitsEnum["TimestampMsec"] = "TIMESTAMP_MSEC";
    CounterMetadataStandardUnitsEnum["TimestampUsec"] = "TIMESTAMP_USEC";
    CounterMetadataStandardUnitsEnum["TimestampNsec"] = "TIMESTAMP_NSEC";
})(CounterMetadataStandardUnitsEnum || (CounterMetadataStandardUnitsEnum = {}));
// CounterMetadata
/**
 * CounterMetadata includes all static non-name non-value counter attributes.
**/
var CounterMetadata = /** @class */ (function (_super) {
    __extends(CounterMetadata, _super);
    function CounterMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CounterMetadata.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], CounterMetadata.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherUnits" }),
        __metadata("design:type", String)
    ], CounterMetadata.prototype, "otherUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=standardUnits" }),
        __metadata("design:type", String)
    ], CounterMetadata.prototype, "standardUnits", void 0);
    return CounterMetadata;
}(SpeakeasyBase));
export { CounterMetadata };
