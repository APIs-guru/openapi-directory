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
import { SourceSplitOptions } from "./sourcesplitoptions";
import { Source } from "./source";
// SourceSplitRequest
/**
 * Represents the operation to split a high-level Source specification into bundles (parts for parallel processing). At a high level, splitting of a source into bundles happens as follows: SourceSplitRequest is applied to the source. If it returns SOURCE_SPLIT_OUTCOME_USE_CURRENT, no further splitting happens and the source is used "as is". Otherwise, splitting is applied recursively to each produced DerivedSource. As an optimization, for any Source, if its does_not_need_splitting is true, the framework assumes that splitting this source would return SOURCE_SPLIT_OUTCOME_USE_CURRENT, and doesn't initiate a SourceSplitRequest. This applies both to the initial source being split and to bundles produced from it.
**/
var SourceSplitRequest = /** @class */ (function (_super) {
    __extends(SourceSplitRequest, _super);
    function SourceSplitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", SourceSplitOptions)
    ], SourceSplitRequest.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", Source)
    ], SourceSplitRequest.prototype, "source", void 0);
    return SourceSplitRequest;
}(SpeakeasyBase));
export { SourceSplitRequest };
