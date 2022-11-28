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
import { DerivedSource } from "./derivedsource";
import { SourceSplitShard } from "./sourcesplitshard";
export var SourceSplitResponseOutcomeEnum;
(function (SourceSplitResponseOutcomeEnum) {
    SourceSplitResponseOutcomeEnum["SourceSplitOutcomeUnknown"] = "SOURCE_SPLIT_OUTCOME_UNKNOWN";
    SourceSplitResponseOutcomeEnum["SourceSplitOutcomeUseCurrent"] = "SOURCE_SPLIT_OUTCOME_USE_CURRENT";
    SourceSplitResponseOutcomeEnum["SourceSplitOutcomeSplittingHappened"] = "SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED";
})(SourceSplitResponseOutcomeEnum || (SourceSplitResponseOutcomeEnum = {}));
// SourceSplitResponse
/**
 * The response to a SourceSplitRequest.
**/
var SourceSplitResponse = /** @class */ (function (_super) {
    __extends(SourceSplitResponse, _super);
    function SourceSplitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bundles", elemType: DerivedSource }),
        __metadata("design:type", Array)
    ], SourceSplitResponse.prototype, "bundles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outcome" }),
        __metadata("design:type", String)
    ], SourceSplitResponse.prototype, "outcome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shards", elemType: SourceSplitShard }),
        __metadata("design:type", Array)
    ], SourceSplitResponse.prototype, "shards", void 0);
    return SourceSplitResponse;
}(SpeakeasyBase));
export { SourceSplitResponse };
