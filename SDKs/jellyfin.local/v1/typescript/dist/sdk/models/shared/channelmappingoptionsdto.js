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
import { NameValuePair } from "./namevaluepair";
import { NameIdPair } from "./nameidpair";
import { TunerChannelMapping } from "./tunerchannelmapping";
// ChannelMappingOptionsDto
/**
 * Channel mapping options dto.
**/
var ChannelMappingOptionsDto = /** @class */ (function (_super) {
    __extends(ChannelMappingOptionsDto, _super);
    function ChannelMappingOptionsDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mappings", elemType: NameValuePair }),
        __metadata("design:type", Array)
    ], ChannelMappingOptionsDto.prototype, "mappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProviderChannels", elemType: NameIdPair }),
        __metadata("design:type", Array)
    ], ChannelMappingOptionsDto.prototype, "providerChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProviderName" }),
        __metadata("design:type", String)
    ], ChannelMappingOptionsDto.prototype, "providerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TunerChannels", elemType: TunerChannelMapping }),
        __metadata("design:type", Array)
    ], ChannelMappingOptionsDto.prototype, "tunerChannels", void 0);
    return ChannelMappingOptionsDto;
}(SpeakeasyBase));
export { ChannelMappingOptionsDto };
