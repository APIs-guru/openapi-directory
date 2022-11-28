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
// FeatureIdProto
/**
 * A globally unique identifier associated with each feature. We use 128-bit identifiers so that we have lots of bits available to distinguish between features. The feature id currently consists of a 64-bit "cell id" that **sometimes** corresponds to the approximate centroid of the feature, plus a 64-bit fingerprint of other identifying information. See more on each respective field in its comments. Feature ids are first assigned when the data is created in MapFacts. After initial creation of the feature, they are immutable. This means that the only properties that you should rely on are that they are unique, and that cell_ids often - but not always - preserve spatial locality. The degree of locality varies as the feature undergoes geometry changes, and should not in general be considered a firm guarantee of the location of any particular feature. In fact, some locationless features have randomized cell IDs! Consumers of FeatureProtos from Mapfacts are guaranteed that fprints in the id field of features will be globally unique. Using the fprint allows consumers who don't need the spatial benefit of cell ids to uniquely identify features in a 64-bit address space. This property is not guaranteed for other sources of FeatureProtos.
**/
var FeatureIdProto = /** @class */ (function (_super) {
    __extends(FeatureIdProto, _super);
    function FeatureIdProto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cellId" }),
        __metadata("design:type", String)
    ], FeatureIdProto.prototype, "cellId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fprint" }),
        __metadata("design:type", String)
    ], FeatureIdProto.prototype, "fprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=temporaryData" }),
        __metadata("design:type", Map)
    ], FeatureIdProto.prototype, "temporaryData", void 0);
    return FeatureIdProto;
}(SpeakeasyBase));
export { FeatureIdProto };
