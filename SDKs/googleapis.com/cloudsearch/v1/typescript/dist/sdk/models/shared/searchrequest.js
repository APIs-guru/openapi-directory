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
import { ContextAttribute } from "./contextattribute";
import { DataSourceRestriction } from "./datasourcerestriction";
import { FacetOptions } from "./facetoptions";
import { QueryInterpretationOptions } from "./queryinterpretationoptions";
import { RequestOptions } from "./requestoptions";
import { SortOptions } from "./sortoptions";
// SearchRequest
/**
 * The search API request.
**/
var SearchRequest = /** @class */ (function (_super) {
    __extends(SearchRequest, _super);
    function SearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contextAttributes", elemType: ContextAttribute }),
        __metadata("design:type", Array)
    ], SearchRequest.prototype, "contextAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceRestrictions", elemType: DataSourceRestriction }),
        __metadata("design:type", Array)
    ], SearchRequest.prototype, "dataSourceRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=facetOptions", elemType: FacetOptions }),
        __metadata("design:type", Array)
    ], SearchRequest.prototype, "facetOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageSize" }),
        __metadata("design:type", Number)
    ], SearchRequest.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", String)
    ], SearchRequest.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryInterpretationOptions" }),
        __metadata("design:type", QueryInterpretationOptions)
    ], SearchRequest.prototype, "queryInterpretationOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestOptions" }),
        __metadata("design:type", RequestOptions)
    ], SearchRequest.prototype, "requestOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOptions" }),
        __metadata("design:type", SortOptions)
    ], SearchRequest.prototype, "sortOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], SearchRequest.prototype, "start", void 0);
    return SearchRequest;
}(SpeakeasyBase));
export { SearchRequest };
