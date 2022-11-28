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
// PrefixNode
/**
 * A message representing a key prefix node in the key prefix hierarchy. for eg. Bigtable keyspaces are lexicographically ordered mappings of keys to values. Keys often have a shared prefix structure where users use the keys to organize data. Eg ///employee In this case Keysight will possibly use one node for a company and reuse it for all employees that fall under the company. Doing so improves legibility in the UI.
**/
var PrefixNode = /** @class */ (function (_super) {
    __extends(PrefixNode, _super);
    function PrefixNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceNode" }),
        __metadata("design:type", Boolean)
    ], PrefixNode.prototype, "dataSourceNode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=depth" }),
        __metadata("design:type", Number)
    ], PrefixNode.prototype, "depth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endIndex" }),
        __metadata("design:type", Number)
    ], PrefixNode.prototype, "endIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startIndex" }),
        __metadata("design:type", Number)
    ], PrefixNode.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=word" }),
        __metadata("design:type", String)
    ], PrefixNode.prototype, "word", void 0);
    return PrefixNode;
}(SpeakeasyBase));
export { PrefixNode };
