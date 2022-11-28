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
import { Api } from "./api";
import { Peer } from "./peer";
import { Request } from "./request";
import { Resource } from "./resource";
import { Response } from "./response";
// AttributeContext
/**
 * This message defines the standard attribute vocabulary for Google APIs. An attribute is a piece of metadata that describes an activity on a network service. For example, the size of an HTTP request, or the status code of an HTTP response. Each attribute has a type and a name, which is logically defined as a proto message field in `AttributeContext`. The field type becomes the attribute type, and the field path becomes the attribute name. For example, the attribute `source.ip` maps to field `AttributeContext.source.ip`. This message definition is guaranteed not to have any wire breaking change. So you can use it directly for passing attributes across different systems. NOTE: Different system may generate different subset of attributes. Please verify the system specification before relying on an attribute generated a system.
**/
var AttributeContext = /** @class */ (function (_super) {
    __extends(AttributeContext, _super);
    function AttributeContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api" }),
        __metadata("design:type", Api)
    ], AttributeContext.prototype, "api", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination" }),
        __metadata("design:type", Peer)
    ], AttributeContext.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extensions" }),
        __metadata("design:type", Array)
    ], AttributeContext.prototype, "extensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origin" }),
        __metadata("design:type", Peer)
    ], AttributeContext.prototype, "origin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", Request)
    ], AttributeContext.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", Resource)
    ], AttributeContext.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", Response)
    ], AttributeContext.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", Peer)
    ], AttributeContext.prototype, "source", void 0);
    return AttributeContext;
}(SpeakeasyBase));
export { AttributeContext };
