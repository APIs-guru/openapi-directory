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
import { DiagnosticMessage } from "./diagnosticmessage";
import { Metric } from "./metric";
import { PrefixNode } from "./prefixnode";
export var VisualizationDataKeyUnitEnum;
(function (VisualizationDataKeyUnitEnum) {
    VisualizationDataKeyUnitEnum["KeyUnitUnspecified"] = "KEY_UNIT_UNSPECIFIED";
    VisualizationDataKeyUnitEnum["Key"] = "KEY";
    VisualizationDataKeyUnitEnum["Chunk"] = "CHUNK";
})(VisualizationDataKeyUnitEnum || (VisualizationDataKeyUnitEnum = {}));
var VisualizationData = /** @class */ (function (_super) {
    __extends(VisualizationData, _super);
    function VisualizationData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceEndToken" }),
        __metadata("design:type", String)
    ], VisualizationData.prototype, "dataSourceEndToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceSeparatorToken" }),
        __metadata("design:type", String)
    ], VisualizationData.prototype, "dataSourceSeparatorToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diagnosticMessages", elemType: DiagnosticMessage }),
        __metadata("design:type", Array)
    ], VisualizationData.prototype, "diagnosticMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endKeyStrings" }),
        __metadata("design:type", Array)
    ], VisualizationData.prototype, "endKeyStrings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasPii" }),
        __metadata("design:type", Boolean)
    ], VisualizationData.prototype, "hasPii", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexedKeys" }),
        __metadata("design:type", Array)
    ], VisualizationData.prototype, "indexedKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keySeparator" }),
        __metadata("design:type", String)
    ], VisualizationData.prototype, "keySeparator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyUnit" }),
        __metadata("design:type", String)
    ], VisualizationData.prototype, "keyUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric }),
        __metadata("design:type", Array)
    ], VisualizationData.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prefixNodes", elemType: PrefixNode }),
        __metadata("design:type", Array)
    ], VisualizationData.prototype, "prefixNodes", void 0);
    return VisualizationData;
}(SpeakeasyBase));
export { VisualizationData };
