# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { TranscoderProjectsLocationsJobTemplatesCreateRequest, TranscoderProjectsLocationsJobTemplatesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: TranscoderProjectsLocationsJobTemplatesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "velit",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "quam",
    alt: "proto",
    callback: "et",
    fields: "quae",
    jobTemplateId: "numquam",
    key: "deserunt",
    oauthToken: "magni",
    prettyPrint: false,
    quotaUser: "rem",
    uploadType: "natus",
    uploadProtocol: "non",
  },
  request: {
    config: {
      adBreaks: [
        {
          startTimeOffset: "veritatis",
        },
        {
          startTimeOffset: "in",
        },
      ],
      editList: [
        {
          endTimeOffset: "sed",
          inputs: [
            "totam",
            "non",
          ],
          key: "id",
          startTimeOffset: "et",
        },
        {
          endTimeOffset: "sunt",
          inputs: [
            "voluptatem",
            "aut",
          ],
          key: "voluptas",
          startTimeOffset: "molestias",
        },
        {
          endTimeOffset: "veniam",
          inputs: [
            "maiores",
            "similique",
          ],
          key: "voluptas",
          startTimeOffset: "nam",
        },
      ],
      elementaryStreams: [
        {
          audioStream: {
            bitrateBps: 8734585012694364174,
            channelCount: 302701263639282980,
            channelLayout: [
              "non",
            ],
            codec: "assumenda",
            mapping: [
              {
                atomKey: "totam",
                gainDb: 41.200001,
                inputChannel: 3889859964007069983,
                inputKey: "ut",
                inputTrack: 429568001705639979,
                outputChannel: 4790094469021478001,
              },
              {
                atomKey: "voluptatem",
                gainDb: 0.100000,
                inputChannel: 3386977228252052151,
                inputKey: "et",
                inputTrack: 4749023452396188290,
                outputChannel: 7209998907851742008,
              },
            ],
            sampleRateHertz: 1000734223704238467,
          },
          key: "quia",
          textStream: {
            codec: "amet",
            mapping: [
              {
                atomKey: "nam",
                inputKey: "voluptatem",
                inputTrack: 4357314511518688067,
              },
              {
                atomKey: "animi",
                inputKey: "sint",
                inputTrack: 18276512334062614,
              },
              {
                atomKey: "adipisci",
                inputKey: "ipsam",
                inputTrack: 7801238710911106663,
              },
            ],
          },
          videoStream: {
            h264: {
              allowOpenGop: false,
              aqStrength: 86.199997,
              bFrameCount: 3841418896324507954,
              bPyramid: false,
              bitrateBps: 7939843431524110287,
              crfLevel: 5604047076731267492,
              enableTwoPass: false,
              entropyCoder: "suscipit",
              frameRate: 94.199997,
              gopDuration: "aut",
              gopFrameCount: 5297468219697682067,
              heightPixels: 7320174327465118610,
              pixelFormat: "quas",
              preset: "voluptatem",
              profile: "molestias",
              rateControlMode: "distinctio",
              tune: "numquam",
              vbvFullnessBits: 4036590877193529035,
              vbvSizeBits: 7945324405830295443,
              widthPixels: 9054588558227671414,
            },
            h265: {
              allowOpenGop: true,
              aqStrength: 31.200001,
              bFrameCount: 1749839644806246279,
              bPyramid: true,
              bitrateBps: 5719770852229404212,
              crfLevel: 2217828989481701641,
              enableTwoPass: false,
              frameRate: 3.100000,
              gopDuration: "ad",
              gopFrameCount: 7009282973790538030,
              heightPixels: 1156906710511097297,
              pixelFormat: "nihil",
              preset: "reiciendis",
              profile: "temporibus",
              rateControlMode: "qui",
              tune: "assumenda",
              vbvFullnessBits: 1743758268169687798,
              vbvSizeBits: 9219256572541687904,
              widthPixels: 5461161769940535317,
            },
            vp9: {
              bitrateBps: 8164515141570333763,
              crfLevel: 3206806895282513228,
              frameRate: 93.099998,
              gopDuration: "exercitationem",
              gopFrameCount: 5378782561829875083,
              heightPixels: 498773123605452739,
              pixelFormat: "minima",
              profile: "veritatis",
              rateControlMode: "fugit",
              widthPixels: 5042047820796143962,
            },
          },
        },
        {
          audioStream: {
            bitrateBps: 3929284748488642302,
            channelCount: 2686214226691111320,
            channelLayout: [
              "error",
              "sint",
            ],
            codec: "similique",
            mapping: [
              {
                atomKey: "inventore",
                gainDb: 80.199997,
                inputChannel: 3645845174871931131,
                inputKey: "repellat",
                inputTrack: 590147102868723875,
                outputChannel: 2741661563563306428,
              },
              {
                atomKey: "et",
                gainDb: 40.200001,
                inputChannel: 4568007762997890894,
                inputKey: "enim",
                inputTrack: 7623676297343562525,
                outputChannel: 6189061385880190931,
              },
              {
                atomKey: "quia",
                gainDb: 84.099998,
                inputChannel: 2728785083707327611,
                inputKey: "non",
                inputTrack: 87046029318097088,
                outputChannel: 1123586898069181084,
              },
            ],
            sampleRateHertz: 242067450589637029,
          },
          key: "illo",
          textStream: {
            codec: "amet",
            mapping: [
              {
                atomKey: "et",
                inputKey: "ut",
                inputTrack: 1548975094613114682,
              },
              {
                atomKey: "placeat",
                inputKey: "sed",
                inputTrack: 9104995226837995035,
              },
            ],
          },
          videoStream: {
            h264: {
              allowOpenGop: true,
              aqStrength: 68.199997,
              bFrameCount: 5269888639481747991,
              bPyramid: true,
              bitrateBps: 802538912262181060,
              crfLevel: 568369648590947085,
              enableTwoPass: false,
              entropyCoder: "nihil",
              frameRate: 99.099998,
              gopDuration: "dolore",
              gopFrameCount: 7715826000470371826,
              heightPixels: 4378772694192042422,
              pixelFormat: "aliquam",
              preset: "officiis",
              profile: "optio",
              rateControlMode: "nesciunt",
              tune: "id",
              vbvFullnessBits: 8241421119188199864,
              vbvSizeBits: 4143091955056473429,
              widthPixels: 4394854628797621424,
            },
            h265: {
              allowOpenGop: false,
              aqStrength: 75.099998,
              bFrameCount: 3112450380192338120,
              bPyramid: true,
              bitrateBps: 3212852262188618094,
              crfLevel: 1388264946705498720,
              enableTwoPass: true,
              frameRate: 66.199997,
              gopDuration: "officia",
              gopFrameCount: 7399963429881155323,
              heightPixels: 6818519795700176993,
              pixelFormat: "quo",
              preset: "distinctio",
              profile: "officia",
              rateControlMode: "sint",
              tune: "iste",
              vbvFullnessBits: 392158597907929278,
              vbvSizeBits: 2504399068614208102,
              widthPixels: 6028572998086476129,
            },
            vp9: {
              bitrateBps: 2063249434314123619,
              crfLevel: 7918130817802109633,
              frameRate: 16.200001,
              gopDuration: "suscipit",
              gopFrameCount: 8218359302734002594,
              heightPixels: 588073027692361460,
              pixelFormat: "qui",
              profile: "earum",
              rateControlMode: "voluptatum",
              widthPixels: 4485477193987646007,
            },
          },
        },
        {
          audioStream: {
            bitrateBps: 8402336689532682306,
            channelCount: 7647680398198231575,
            channelLayout: [
              "eligendi",
              "id",
            ],
            codec: "aut",
            mapping: [
              {
                atomKey: "praesentium",
                gainDb: 29.200001,
                inputChannel: 8321376229948355446,
                inputKey: "ut",
                inputTrack: 959802031382052165,
                outputChannel: 1214262551526982576,
              },
              {
                atomKey: "ratione",
                gainDb: 52.200001,
                inputChannel: 5876030672547755157,
                inputKey: "ipsa",
                inputTrack: 1885012052023597816,
                outputChannel: 4127993684334626263,
              },
            ],
            sampleRateHertz: 1640789388345126256,
          },
          key: "sed",
          textStream: {
            codec: "sapiente",
            mapping: [
              {
                atomKey: "unde",
                inputKey: "repellat",
                inputTrack: 1602945392460790129,
              },
              {
                atomKey: "non",
                inputKey: "est",
                inputTrack: 5586104001001354351,
              },
            ],
          },
          videoStream: {
            h264: {
              allowOpenGop: true,
              aqStrength: 6.200000,
              bFrameCount: 3283142419460839713,
              bPyramid: false,
              bitrateBps: 5281713157585046619,
              crfLevel: 7733002441376951230,
              enableTwoPass: true,
              entropyCoder: "voluptates",
              frameRate: 53.200001,
              gopDuration: "qui",
              gopFrameCount: 831723543712814911,
              heightPixels: 411614886395256957,
              pixelFormat: "atque",
              preset: "minima",
              profile: "porro",
              rateControlMode: "dolorem",
              tune: "et",
              vbvFullnessBits: 5887184027869204886,
              vbvSizeBits: 1635229212842713520,
              widthPixels: 5060867259184677518,
            },
            h265: {
              allowOpenGop: false,
              aqStrength: 23.100000,
              bFrameCount: 5305597144890785549,
              bPyramid: true,
              bitrateBps: 6965659755888807060,
              crfLevel: 7013263175760477862,
              enableTwoPass: false,
              frameRate: 39.099998,
              gopDuration: "qui",
              gopFrameCount: 3687438973040014816,
              heightPixels: 8086079741019364905,
              pixelFormat: "qui",
              preset: "corporis",
              profile: "dolorem",
              rateControlMode: "at",
              tune: "nesciunt",
              vbvFullnessBits: 557220476685422978,
              vbvSizeBits: 7873058198823816717,
              widthPixels: 7268282757941392214,
            },
            vp9: {
              bitrateBps: 8955634575045901885,
              crfLevel: 9142074952729957239,
              frameRate: 45.200001,
              gopDuration: "qui",
              gopFrameCount: 8814807336944713353,
              heightPixels: 7295268869745193438,
              pixelFormat: "libero",
              profile: "et",
              rateControlMode: "doloremque",
              widthPixels: 8087097581717723326,
            },
          },
        },
      ],
      inputs: [
        {
          key: "ratione",
          preprocessingConfig: {
            audio: {
              highBoost: true,
              lowBoost: false,
              lufs: 34.099998,
            },
            color: {
              brightness: 7.200000,
              contrast: 53.200001,
              saturation: 11.200000,
            },
            crop: {
              bottomPixels: 4737043999706933419,
              leftPixels: 4968549698319254635,
              rightPixels: 9115460186079630327,
              topPixels: 8080282138260317142,
            },
            deblock: {
              enabled: false,
              strength: 61.099998,
            },
            deinterlace: {
              bwdif: {
                deinterlaceAllFrames: true,
                mode: "voluptas",
                parity: "non",
              },
              yadif: {
                deinterlaceAllFrames: true,
                disableSpatialInterlacing: true,
                mode: "harum",
                parity: "atque",
              },
            },
            denoise: {
              strength: 25.100000,
              tune: "nesciunt",
            },
            pad: {
              bottomPixels: 4067222969291303946,
              leftPixels: 3089208062786954445,
              rightPixels: 1945268195522693184,
              topPixels: 2859159837115009773,
            },
          },
          uri: "nisi",
        },
        {
          key: "iste",
          preprocessingConfig: {
            audio: {
              highBoost: true,
              lowBoost: false,
              lufs: 25.100000,
            },
            color: {
              brightness: 10.200000,
              contrast: 22.100000,
              saturation: 63.099998,
            },
            crop: {
              bottomPixels: 7332610496941734356,
              leftPixels: 5443945459485265932,
              rightPixels: 7568492041520297667,
              topPixels: 3157484068396623756,
            },
            deblock: {
              enabled: true,
              strength: 29.100000,
            },
            deinterlace: {
              bwdif: {
                deinterlaceAllFrames: true,
                mode: "non",
                parity: "voluptate",
              },
              yadif: {
                deinterlaceAllFrames: false,
                disableSpatialInterlacing: true,
                mode: "culpa",
                parity: "expedita",
              },
            },
            denoise: {
              strength: 59.099998,
              tune: "possimus",
            },
            pad: {
              bottomPixels: 3436104069359179590,
              leftPixels: 3843084449304307966,
              rightPixels: 1312761340097649485,
              topPixels: 433292245493960788,
            },
          },
          uri: "facere",
        },
      ],
      manifests: [
        {
          fileName: "veritatis",
          muxStreams: [
            "similique",
            "placeat",
            "laudantium",
          ],
          type: "HLS",
        },
        {
          fileName: "impedit",
          muxStreams: [
            "nihil",
            "aut",
          ],
          type: "DASH",
        },
        {
          fileName: "voluptas",
          muxStreams: [
            "non",
          ],
          type: "HLS",
        },
      ],
      muxStreams: [
        {
          container: "nulla",
          elementaryStreams: [
            "facilis",
            "eveniet",
            "et",
          ],
          fileName: "et",
          key: "culpa",
          segmentSettings: {
            individualSegments: false,
            segmentDuration: "consequatur",
          },
        },
        {
          container: "nisi",
          elementaryStreams: [
            "esse",
            "consequatur",
          ],
          fileName: "quo",
          key: "et",
          segmentSettings: {
            individualSegments: false,
            segmentDuration: "vitae",
          },
        },
        {
          container: "quia",
          elementaryStreams: [
            "commodi",
          ],
          fileName: "fuga",
          key: "asperiores",
          segmentSettings: {
            individualSegments: true,
            segmentDuration: "veniam",
          },
        },
      ],
      output: {
        uri: "consequatur",
      },
      overlays: [
        {
          animations: [
            {
              animationEnd: {
                startTimeOffset: "consectetur",
              },
              animationFade: {
                endTimeOffset: "at",
                fadeType: "FADE_OUT",
                startTimeOffset: "enim",
                xy: {
                  x: 98.199997,
                  y: 57.200001,
                },
              },
              animationStatic: {
                startTimeOffset: "necessitatibus",
                xy: {
                  x: 85.099998,
                  y: 52.200001,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "ut",
              },
              animationFade: {
                endTimeOffset: "velit",
                fadeType: "FADE_IN",
                startTimeOffset: "quae",
                xy: {
                  x: 49.200001,
                  y: 10.100000,
                },
              },
              animationStatic: {
                startTimeOffset: "alias",
                xy: {
                  x: 68.199997,
                  y: 19.200001,
                },
              },
            },
          ],
          image: {
            alpha: 97.099998,
            resolution: {
              x: 15.100000,
              y: 5.200000,
            },
            uri: "ipsa",
          },
        },
        {
          animations: [
            {
              animationEnd: {
                startTimeOffset: "error",
              },
              animationFade: {
                endTimeOffset: "modi",
                fadeType: "FADE_TYPE_UNSPECIFIED",
                startTimeOffset: "et",
                xy: {
                  x: 12.200000,
                  y: 37.099998,
                },
              },
              animationStatic: {
                startTimeOffset: "libero",
                xy: {
                  x: 97.199997,
                  y: 93.099998,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "repudiandae",
              },
              animationFade: {
                endTimeOffset: "esse",
                fadeType: "FADE_TYPE_UNSPECIFIED",
                startTimeOffset: "facilis",
                xy: {
                  x: 71.099998,
                  y: 51.099998,
                },
              },
              animationStatic: {
                startTimeOffset: "aut",
                xy: {
                  x: 17.100000,
                  y: 49.200001,
                },
              },
            },
          ],
          image: {
            alpha: 70.099998,
            resolution: {
              x: 33.099998,
              y: 40.099998,
            },
            uri: "ea",
          },
        },
      ],
      pubsubDestination: {
        topic: "placeat",
      },
      spriteSheets: [
        {
          columnCount: 1272736995480537983,
          endTimeOffset: "itaque",
          filePrefix: "cumque",
          format: "eos",
          interval: "et",
          quality: 6569622695271555726,
          rowCount: 5479443683048647611,
          spriteHeightPixels: 8679056765873583647,
          spriteWidthPixels: 7007488209292830384,
          startTimeOffset: "eaque",
          totalCount: 6810658305575331346,
        },
      ],
    },
    labels: {
      "minima": "accusamus",
      "explicabo": "qui",
    },
    name: "enim",
  },
};

sdk.projects.transcoderProjectsLocationsJobTemplatesCreate(req).then((res: TranscoderProjectsLocationsJobTemplatesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `transcoderProjectsLocationsJobTemplatesCreate` - Creates a job template in the specified region.
* `transcoderProjectsLocationsJobTemplatesDelete` - Deletes a job template.
* `transcoderProjectsLocationsJobTemplatesGet` - Returns the job template data.
* `transcoderProjectsLocationsJobTemplatesList` - Lists job templates in the specified region.
* `transcoderProjectsLocationsJobsCreate` - Creates a job in the specified region.
* `transcoderProjectsLocationsJobsList` - Lists jobs in the specified region.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
