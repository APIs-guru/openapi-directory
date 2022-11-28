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
import { Asset } from "./asset";
import { StatementTemplate } from "./statementtemplate";
// BulkCheckRequest
/**
 * Message used to check for the existence of multiple digital asset links within a single RPC.
**/
var BulkCheckRequest = /** @class */ (function (_super) {
    __extends(BulkCheckRequest, _super);
    function BulkCheckRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowGoogleInternalDataSources" }),
        __metadata("design:type", Boolean)
    ], BulkCheckRequest.prototype, "allowGoogleInternalDataSources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultRelation" }),
        __metadata("design:type", String)
    ], BulkCheckRequest.prototype, "defaultRelation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultSource" }),
        __metadata("design:type", Asset)
    ], BulkCheckRequest.prototype, "defaultSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultTarget" }),
        __metadata("design:type", Asset)
    ], BulkCheckRequest.prototype, "defaultTarget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skipCacheLookup" }),
        __metadata("design:type", Boolean)
    ], BulkCheckRequest.prototype, "skipCacheLookup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statements", elemType: StatementTemplate }),
        __metadata("design:type", Array)
    ], BulkCheckRequest.prototype, "statements", void 0);
    return BulkCheckRequest;
}(SpeakeasyBase));
export { BulkCheckRequest };
