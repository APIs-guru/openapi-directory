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
import { DisplayData } from "./displaydata";
export var TransformSummaryKindEnum;
(function (TransformSummaryKindEnum) {
    TransformSummaryKindEnum["UnknownKind"] = "UNKNOWN_KIND";
    TransformSummaryKindEnum["ParDoKind"] = "PAR_DO_KIND";
    TransformSummaryKindEnum["GroupByKeyKind"] = "GROUP_BY_KEY_KIND";
    TransformSummaryKindEnum["FlattenKind"] = "FLATTEN_KIND";
    TransformSummaryKindEnum["ReadKind"] = "READ_KIND";
    TransformSummaryKindEnum["WriteKind"] = "WRITE_KIND";
    TransformSummaryKindEnum["ConstantKind"] = "CONSTANT_KIND";
    TransformSummaryKindEnum["SingletonKind"] = "SINGLETON_KIND";
    TransformSummaryKindEnum["ShuffleKind"] = "SHUFFLE_KIND";
})(TransformSummaryKindEnum || (TransformSummaryKindEnum = {}));
// TransformSummary
/**
 * Description of the type, names/ids, and input/outputs for a transform.
**/
var TransformSummary = /** @class */ (function (_super) {
    __extends(TransformSummary, _super);
    function TransformSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayData", elemType: DisplayData }),
        __metadata("design:type", Array)
    ], TransformSummary.prototype, "displayData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TransformSummary.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputCollectionName" }),
        __metadata("design:type", Array)
    ], TransformSummary.prototype, "inputCollectionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], TransformSummary.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TransformSummary.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputCollectionName" }),
        __metadata("design:type", Array)
    ], TransformSummary.prototype, "outputCollectionName", void 0);
    return TransformSummary;
}(SpeakeasyBase));
export { TransformSummary };
